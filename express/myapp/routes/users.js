var express = require('express');
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * query from db with orm
 */
router.get("/list", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


router.get("/add", async (req, res) => {
  try {
    const results = await prisma.user.createMany({
      data: [{ name: "prisma1" }, { name: "prisma2" }],
    });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * transaction demo
 * https://prisma.nodejs.cn/concepts/components/prisma-client/transactions
 */
router.get("/rollback", async (req, res) => {
  // 1. 注意await等待异步结果，否则catch无效!!
  // 2. 注意内部使用同一事务对象tx调用对象方法
  try {
    await  prisma.$transaction(async (tx) => {
      await tx.$executeRaw`UPDATE User SET name = concat('Hello ', now())  WHERE id = 1;`
      const results = await tx.$queryRaw`SELECT * FROM User where id = 1`;
      console.log("queryRaw result = ", results);
      throw new Error("rollback by self.");
    });
  } catch (error) {
    console.error('catched Error Info: ', error);
    res.status(500).send(error.message);
  }

});

module.exports = router;
