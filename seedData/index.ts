import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient();

async function SeedData() {
  // Clear existing data
  await prisma.trHd.deleteMany({});
  await prisma.prd.deleteMany({});
  await prisma.custInfo.deleteMany({});

  // Insert customers
  const customers = await Promise.all([
    prisma.custInfo.create({
      data: {
        nm: 'John Smith',
        em: 'johnsmith@example.com',
        rgn: 'WEST',
        sgmt: 'PREMIUM',
        jn_dt: new Date('2022-01-15'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'Mary Johnson',
        em: 'mary.j@example.net',
        rgn: 'EAST',
        sgmt: 'STANDARD',
        jn_dt: new Date('2022-02-20'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'Robert Brown',
        em: 'rbrown@sample.com',
        rgn: 'CENTR',
        sgmt: 'PREMIUM',
        jn_dt: new Date('2022-03-12'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'Jennifer Davis',
        em: 'jdavis@mail.org',
        rgn: 'WEST',
        sgmt: 'BASIC',
        jn_dt: new Date('2022-04-05'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'Michael Wilson',
        em: 'mwilson@example.com',
        rgn: 'EAST',
        sgmt: 'PREMIUM',
        jn_dt: new Date('2022-05-18'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'Elizabeth Moore',
        em: 'emoore@sample.net',
        rgn: 'SOUTH',
        sgmt: 'STANDARD',
        jn_dt: new Date('2022-06-30'),
        act: true,
      },
    }),
    prisma.custInfo.create({
      data: {
        nm: 'William Taylor',
        em: 'wtaylor@mail.com',
        rgn: null,
        sgmt: 'BASIC',
        jn_dt: new Date('2022-07-11'),
        act: false,
      },
    }),
  ]);

  // Insert products
  const products = await Promise.all([
    prisma.prd.create({
      data: {
        ttl: 'Laptop Pro X5',
        ctgr: 'ELECTR',
        c_p: 800.00,
        r_p: 1299.99,
        stk: 45,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Smartphone Galaxy',
        ctgr: 'ELECTR',
        c_p: 400.00,
        r_p: 799.99,
        stk: 78,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Designer Jeans',
        ctgr: 'APPARL',
        c_p: 35.00,
        r_p: 89.99,
        stk: 120,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Premium Coffee Maker',
        ctgr: 'HOME',
        c_p: 65.00,
        r_p: 149.99,
        stk: 32,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Wireless Headphones',
        ctgr: 'ELECTR',
        c_p: 40.00,
        r_p: 99.99,
        stk: 65,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Smart Watch Elite',
        ctgr: 'ELECTR',
        c_p: 120.00,
        r_p: 249.99,
        stk: 28,
        act: true,
      },
    }),
    prisma.prd.create({
      data: {
        ttl: 'Casual Sneakers',
        ctgr: 'APPARL',
        c_p: 25.00,
        r_p: 69.99,
        stk: 95,
        act: true,
      },
    }),
  ]);

  // Insert orders
  const orders = await Promise.all([
    prisma.trHd.create({
      data: {
        cid: customers[0].cid,
        o_dt: new Date('2023-09-10T14:22:15'),
        sts: 'COMPL',
        ttl: 1299.99,
        py_mtd: 'CREDIT',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[2].cid,
        o_dt: new Date('2023-09-15T09:45:30'),
        sts: 'COMPL',
        ttl: 799.99,
        py_mtd: 'CREDIT',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[4].cid,
        o_dt: new Date('2023-09-22T16:33:45'),
        sts: 'COMPL',
        ttl: 139.99,
        py_mtd: 'PAYPL',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[1].cid,
        o_dt: new Date('2023-10-05T11:12:00'),
        sts: 'COMPL',
        ttl: 99.99,
        py_mtd: 'DEBIT',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[3].cid,
        o_dt: new Date('2023-10-18T13:45:10'),
        sts: 'COMPL',
        ttl: 69.99,
        py_mtd: 'PAYPL',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[5].cid,
        o_dt: new Date('2023-11-20T11:25:15'),
        sts: 'COMPL',
        ttl: 199.99,
        py_mtd: 'PAYPL',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[4].cid,
        o_dt: new Date('2024-01-10T11:30:00'),
        sts: 'PROCE',
        ttl: 399.99,
        py_mtd: 'PAYPL',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[6].cid,
        o_dt: new Date('2024-01-15T16:45:30'),
        sts: 'SHIPT',
        ttl: 49.99,
        py_mtd: 'DEBIT',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[1].cid,
        o_dt: new Date('2024-01-20T10:00:15'),
        sts: 'PENDI',
        ttl: 299.99,
        py_mtd: 'CREDIT',
      },
    }),
    prisma.trHd.create({
      data: {
        cid: customers[2].cid,
        o_dt: new Date('2024-01-25T15:20:30'),
        sts: 'PENDI',
        ttl: 59.99,
        py_mtd: 'PAYPL',
      },
    }),
  ]);

  console.log('Database has been seeded successfully');
}

SeedData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });