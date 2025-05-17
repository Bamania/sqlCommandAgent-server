"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../generated/prisma");
var prisma = new prisma_1.PrismaClient();
function SeedData() {
    return __awaiter(this, void 0, void 0, function () {
        var customers, products, orders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Clear existing data
                return [4 /*yield*/, prisma.trHd.deleteMany({})];
                case 1:
                    // Clear existing data
                    _a.sent();
                    return [4 /*yield*/, prisma.prd.deleteMany({})];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.custInfo.deleteMany({})];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, Promise.all([
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
                        ])];
                case 4:
                    customers = _a.sent();
                    return [4 /*yield*/, Promise.all([
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
                        ])];
                case 5:
                    products = _a.sent();
                    return [4 /*yield*/, Promise.all([
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
                        ])];
                case 6:
                    orders = _a.sent();
                    console.log('Database has been seeded successfully');
                    return [2 /*return*/];
            }
        });
    });
}
SeedData()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
