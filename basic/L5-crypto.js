
/**
 * MD5和SHA1 都是hash算法
 * HmacHMAC 是一种基于哈希函数的消息认证码，用于验证数据完整性和真实性
 */


const crypto = require('crypto');

// const hmac = crypto.createHmac('sha256', 'secret-key');
// hmac.update('Hello, world!');
// console.log(hmac.digest('hex'));

/**
 * AES
 * 
 * aes-192-cbc 表示使用 AES-192 算法以 CBC 模式进行加密。
 * 需要提供一个 24 字符的密钥（secretKey）和一个 16 字节的 IV
 */


// 随机生成固定长度的 Buffer
function generateRandomIV() {
  return crypto.randomBytes(16);
}

const iv = generateRandomIV();

// 加密函数
function encrypt(text, secretKey) {
  const key = crypto.scryptSync(secretKey, 'salt', 24);
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// 解密函数
function decrypt(encryptedText, secretKey) {
  const key = crypto.scryptSync(secretKey, 'salt', 24);
  const decipher = crypto.createDecipheriv('aes-192-cbc', key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// 示例
const originalText = 'Hello, world!';
const secretKey = 'yourSecretKey';

// 加密
console.log('IV:', iv);
const encrypted= encrypt(originalText, secretKey);
console.log('Encrypted:', encrypted);

// 解密
const decryptedText = decrypt(encrypted, secretKey);
console.log('Decrypted:', decryptedText);

