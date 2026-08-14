
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
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
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
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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
  role: 'role',
  status: 'status',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NewsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  category: 'category',
  date: 'date',
  author: 'author',
  thumbnail: 'thumbnail',
  summary: 'summary',
  content: 'content',
  tags: 'tags',
  featured: 'featured',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LecturerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  nidn: 'nidn',
  title: 'title',
  photo: 'photo',
  expertise: 'expertise',
  expertiseTags: 'expertiseTags',
  email: 'email',
  lab: 'lab',
  education: 'education',
  googleScholar: 'googleScholar',
  scopus: 'scopus',
  sinta: 'sinta',
  orcid: 'orcid',
  researchGate: 'researchGate',
  coursesTaught: 'coursesTaught',
  publicationsCount: 'publicationsCount',
  studyProgram: 'studyProgram',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudyProgramScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  degree: 'degree',
  accreditation: 'accreditation',
  headOfProgram: 'headOfProgram',
  headOfProdi: 'headOfProdi',
  headOfProdiNidn: 'headOfProdiNidn',
  headOfProdiPhoto: 'headOfProdiPhoto',
  description: 'description',
  totalSks: 'totalSks',
  activeStudents: 'activeStudents',
  capacity: 'capacity',
  vision: 'vision',
  logoUrl: 'logoUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  sks: 'sks',
  semester: 'semester',
  category: 'category',
  specialization: 'specialization',
  studyProgram: 'studyProgram',
  description: 'description',
  prerequisites: 'prerequisites',
  syllabusTopic: 'syllabusTopic',
  rpsUrl: 'rpsUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentOrgScalarFieldEnum = {
  id: 'id',
  name: 'name',
  abbreviation: 'abbreviation',
  logo: 'logo',
  description: 'description',
  cabinetName: 'cabinetName',
  cabinetYear: 'cabinetYear',
  leaderName: 'leaderName',
  leaderPhoto: 'leaderPhoto',
  viceLeaderName: 'viceLeaderName',
  divisions: 'divisions',
  upcomingEvents: 'upcomingEvents',
  updatedAt: 'updatedAt'
};

exports.Prisma.MediaFileScalarFieldEnum = {
  id: 'id',
  fileName: 'fileName',
  originalName: 'originalName',
  sizeBytes: 'sizeBytes',
  type: 'type',
  url: 'url',
  uploadedAt: 'uploadedAt',
  dimensions: 'dimensions',
  folderId: 'folderId',
  createdAt: 'createdAt'
};

exports.Prisma.MenuItemScalarFieldEnum = {
  id: 'id',
  label: 'label',
  url: 'url',
  isExternal: 'isExternal',
  isVisible: 'isVisible',
  badge: 'badge',
  order: 'order',
  parentId: 'parentId',
  icon: 'icon',
  line1: 'line1',
  line2: 'line2',
  childrenData: 'childrenData',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LaboratoryScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  shortDesc: 'shortDesc',
  headOfLab: 'headOfLab',
  headPhoto: 'headPhoto',
  labAssistants: 'labAssistants',
  image: 'image',
  location: 'location',
  capacity: 'capacity',
  specifications: 'specifications',
  equipmentList: 'equipmentList',
  softwareInstalled: 'softwareInstalled',
  virtualTour360Url: 'virtualTour360Url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ResearchGroupScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  leadLecturer: 'leadLecturer',
  membersCount: 'membersCount',
  description: 'description',
  topics: 'topics',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PublicationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  authors: 'authors',
  year: 'year',
  publisher: 'publisher',
  type: 'type',
  pdfUrl: 'pdfUrl',
  doi: 'doi',
  specialization: 'specialization',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InnovationProductScalarFieldEnum = {
  id: 'id',
  title: 'title',
  developer: 'developer',
  category: 'category',
  year: 'year',
  thumbnail: 'thumbnail',
  description: 'description',
  techStack: 'techStack',
  demoUrl: 'demoUrl',
  githubUrl: 'githubUrl',
  award: 'award',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentAchievementScalarFieldEnum = {
  id: 'id',
  competition: 'competition',
  title: 'title',
  rank: 'rank',
  level: 'level',
  year: 'year',
  studentNames: 'studentNames',
  mentorLecturer: 'mentorLecturer',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AlumniTestimonialScalarFieldEnum = {
  id: 'id',
  name: 'name',
  gradYear: 'gradYear',
  role: 'role',
  company: 'company',
  companyLogo: 'companyLogo',
  photo: 'photo',
  quote: 'quote',
  linkedinUrl: 'linkedinUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobVacancyScalarFieldEnum = {
  id: 'id',
  title: 'title',
  company: 'company',
  logo: 'logo',
  location: 'location',
  type: 'type',
  specialization: 'specialization',
  postedDate: 'postedDate',
  applyDeadline: 'applyDeadline',
  requirements: 'requirements',
  applyLink: 'applyLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PMBTrackScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  capacity: 'capacity',
  period: 'period',
  requirements: 'requirements',
  benefits: 'benefits',
  feeEstimate: 'feeEstimate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicCalendarItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  startDate: 'startDate',
  endDate: 'endDate',
  category: 'category',
  semester: 'semester',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FAQItemScalarFieldEnum = {
  id: 'id',
  category: 'category',
  question: 'question',
  answer: 'answer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.QuickLinkScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  url: 'url',
  iconName: 'iconName',
  badge: 'badge',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SiteDataScalarFieldEnum = {
  key: 'key',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MediaFolderScalarFieldEnum = {
  id: 'id',
  name: 'name',
  parentId: 'parentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  News: 'News',
  Lecturer: 'Lecturer',
  StudyProgram: 'StudyProgram',
  Course: 'Course',
  StudentOrg: 'StudentOrg',
  MediaFile: 'MediaFile',
  MenuItem: 'MenuItem',
  Laboratory: 'Laboratory',
  ResearchGroup: 'ResearchGroup',
  Publication: 'Publication',
  InnovationProduct: 'InnovationProduct',
  StudentAchievement: 'StudentAchievement',
  AlumniTestimonial: 'AlumniTestimonial',
  JobVacancy: 'JobVacancy',
  PMBTrack: 'PMBTrack',
  AcademicCalendarItem: 'AcademicCalendarItem',
  FAQItem: 'FAQItem',
  QuickLink: 'QuickLink',
  SiteData: 'SiteData',
  MediaFolder: 'MediaFolder'
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
