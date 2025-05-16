-- CreateTable
CREATE TABLE "cust_info" (
    "cid" SERIAL NOT NULL,
    "nm" TEXT NOT NULL,
    "em" TEXT NOT NULL,
    "rgn" TEXT,
    "sgmt" TEXT NOT NULL,
    "jn_dt" TIMESTAMP(3) NOT NULL,
    "act" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "cust_info_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "prd" (
    "pid" SERIAL NOT NULL,
    "ttl" TEXT NOT NULL,
    "ctgr" TEXT NOT NULL,
    "c_p" DECIMAL(10,2) NOT NULL,
    "r_p" DECIMAL(10,2) NOT NULL,
    "stk" INTEGER NOT NULL,
    "act" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "prd_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "tr_hd" (
    "oid" SERIAL NOT NULL,
    "cid" INTEGER NOT NULL,
    "o_dt" TIMESTAMP(3) NOT NULL,
    "sts" TEXT NOT NULL,
    "ttl" DECIMAL(12,2) NOT NULL,
    "py_mtd" TEXT NOT NULL,

    CONSTRAINT "tr_hd_pkey" PRIMARY KEY ("oid")
);

-- AddForeignKey
ALTER TABLE "tr_hd" ADD CONSTRAINT "tr_hd_cid_fkey" FOREIGN KEY ("cid") REFERENCES "cust_info"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
