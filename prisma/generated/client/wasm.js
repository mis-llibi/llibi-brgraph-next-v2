
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  admin: 'admin',
  canUpload: 'canUpload',
  canCreate: 'canCreate',
  canViewDeck: 'canViewDeck',
  canUploadDeck: 'canUploadDeck',
  canAdd: 'canAdd',
  canRemove: 'canRemove',
  canEdit: 'canEdit',
  superAdmin: 'superAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InsurersScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ClientsScalarFieldEnum = {
  id: 'id',
  client_name: 'client_name',
  description: 'description',
  insurer_id: 'insurer_id'
};

exports.Prisma.UploadsScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  insurerId: 'insurerId',
  year: 'year',
  months: 'months',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DecksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  clientId: 'clientId'
};

exports.Prisma.IntellicareMasterlistScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  PY: 'PY',
  ACCOUNT_NO: 'ACCOUNT_NO',
  STATUS: 'STATUS',
  MEMBER_TYPE: 'MEMBER_TYPE',
  RNB: 'RNB',
  PREEXIST: 'PREEXIST',
  LIMIT: 'LIMIT',
  BIRTHDATE: 'BIRTHDATE',
  AGE: 'AGE',
  RELATION: 'RELATION',
  EE_ID: 'EE_ID',
  CARD_NO: 'CARD_NO',
  COMPANY: 'COMPANY',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MaxicareMasterlistScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  PY: 'PY',
  ACCOUNT_NO: 'ACCOUNT_NO',
  STATUS: 'STATUS',
  MEMBER_TYPE: 'MEMBER_TYPE',
  LIMIT: 'LIMIT',
  RELATION: 'RELATION',
  EE_ID: 'EE_ID',
  CARD_NO: 'CARD_NO',
  COMPANY: 'COMPANY',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.IntellicareScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  PY: 'PY',
  Company: 'Company',
  Member_Account: 'Member_Account',
  Member_Type: 'Member_Type',
  ICD_10_Code: 'ICD_10_Code',
  Diagnosis: 'Diagnosis',
  Claim_Type: 'Claim_Type',
  Admission_Date: 'Admission_Date',
  Provider_Name: 'Provider_Name',
  Provider_Type: 'Provider_Type',
  Approved_Claim_Amount: 'Approved_Claim_Amount',
  Class_Plan_Level: 'Class_Plan_Level',
  Maximum_Benefit_Limit: 'Maximum_Benefit_Limit',
  Date_of_Birth: 'Date_of_Birth',
  Relationship: 'Relationship',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MaxicareScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  PY: 'PY',
  Company: 'Company',
  Member_Account: 'Member_Account',
  Member_Type: 'Member_Type',
  ICD_10_Code: 'ICD_10_Code',
  Diagnosis: 'Diagnosis',
  Claim_Type: 'Claim_Type',
  Admission_Date: 'Admission_Date',
  Provider_Name: 'Provider_Name',
  Provider_Type: 'Provider_Type',
  Approved_Claim_Amount: 'Approved_Claim_Amount',
  Relationship: 'Relationship',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomIllnessesScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  py: 'py',
  member_type: 'member_type',
  icd_10_code: 'icd_10_code',
  diagnosis: 'diagnosis',
  claim_amount: 'claim_amount',
  percentage_to_total_amount: 'percentage_to_total_amount',
  claim_count: 'claim_count',
  percentage_to_total_count: 'percentage_to_total_count',
  average_cost_per_claim: 'average_cost_per_claim',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  password: 'password'
};

exports.Prisma.insurersOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.clientsOrderByRelevanceFieldEnum = {
  client_name: 'client_name',
  description: 'description'
};

exports.Prisma.uploadsOrderByRelevanceFieldEnum = {
  year: 'year',
  months: 'months',
  type: 'type'
};

exports.Prisma.decksOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.intellicareMasterlistOrderByRelevanceFieldEnum = {
  PY: 'PY',
  ACCOUNT_NO: 'ACCOUNT_NO',
  STATUS: 'STATUS',
  MEMBER_TYPE: 'MEMBER_TYPE',
  RNB: 'RNB',
  RELATION: 'RELATION',
  EE_ID: 'EE_ID',
  CARD_NO: 'CARD_NO',
  COMPANY: 'COMPANY'
};

exports.Prisma.maxicareMasterlistOrderByRelevanceFieldEnum = {
  PY: 'PY',
  ACCOUNT_NO: 'ACCOUNT_NO',
  STATUS: 'STATUS',
  MEMBER_TYPE: 'MEMBER_TYPE',
  RELATION: 'RELATION',
  EE_ID: 'EE_ID',
  CARD_NO: 'CARD_NO',
  COMPANY: 'COMPANY'
};

exports.Prisma.intellicareOrderByRelevanceFieldEnum = {
  PY: 'PY',
  Company: 'Company',
  Member_Account: 'Member_Account',
  Member_Type: 'Member_Type',
  ICD_10_Code: 'ICD_10_Code',
  Diagnosis: 'Diagnosis',
  Claim_Type: 'Claim_Type',
  Provider_Name: 'Provider_Name',
  Provider_Type: 'Provider_Type',
  Class_Plan_Level: 'Class_Plan_Level',
  Relationship: 'Relationship'
};

exports.Prisma.maxicareOrderByRelevanceFieldEnum = {
  PY: 'PY',
  Company: 'Company',
  Member_Account: 'Member_Account',
  Member_Type: 'Member_Type',
  ICD_10_Code: 'ICD_10_Code',
  Diagnosis: 'Diagnosis',
  Claim_Type: 'Claim_Type',
  Provider_Name: 'Provider_Name',
  Provider_Type: 'Provider_Type',
  Relationship: 'Relationship'
};

exports.Prisma.customIllnessesOrderByRelevanceFieldEnum = {
  py: 'py',
  member_type: 'member_type',
  icd_10_code: 'icd_10_code',
  diagnosis: 'diagnosis'
};


exports.Prisma.ModelName = {
  user: 'user',
  insurers: 'insurers',
  clients: 'clients',
  uploads: 'uploads',
  decks: 'decks',
  intellicareMasterlist: 'intellicareMasterlist',
  maxicareMasterlist: 'maxicareMasterlist',
  intellicare: 'intellicare',
  maxicare: 'maxicare',
  customIllnesses: 'customIllnesses'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
