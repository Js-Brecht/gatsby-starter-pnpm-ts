// eslint-disable

export type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>,
  readonly ne: Maybe<Scalars['Boolean']>,
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>,
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>,
  readonly ne: Maybe<Scalars['Date']>,
  readonly gt: Maybe<Scalars['Date']>,
  readonly gte: Maybe<Scalars['Date']>,
  readonly lt: Maybe<Scalars['Date']>,
  readonly lte: Maybe<Scalars['Date']>,
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>,
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'],
  readonly absolutePath: Scalars['String'],
  readonly relativePath: Scalars['String'],
  readonly extension: Scalars['String'],
  readonly size: Scalars['Int'],
  readonly prettySize: Scalars['String'],
  readonly modifiedTime: Scalars['Date'],
  readonly accessTime: Scalars['Date'],
  readonly changeTime: Scalars['Date'],
  readonly birthTime: Scalars['Date'],
  readonly root: Scalars['String'],
  readonly dir: Scalars['String'],
  readonly base: Scalars['String'],
  readonly ext: Scalars['String'],
  readonly name: Scalars['String'],
  readonly relativeDirectory: Scalars['String'],
  readonly dev: Scalars['Int'],
  readonly mode: Scalars['Int'],
  readonly nlink: Scalars['Int'],
  readonly uid: Scalars['Int'],
  readonly gid: Scalars['Int'],
  readonly rdev: Scalars['Int'],
  readonly ino: Scalars['Float'],
  readonly atimeMs: Scalars['Float'],
  readonly mtimeMs: Scalars['Float'],
  readonly ctimeMs: Scalars['Float'],
  readonly atime: Scalars['Date'],
  readonly mtime: Scalars['Date'],
  readonly ctime: Scalars['Date'],
  readonly birthtime: Maybe<Scalars['Date']>,
  readonly birthtimeMs: Maybe<Scalars['Float']>,
  readonly blksize: Maybe<Scalars['Int']>,
  readonly blocks: Maybe<Scalars['Int']>,
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<DirectoryEdge>,
  readonly nodes: ReadonlyArray<Directory>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<DirectoryGroupConnection>,
};


export type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  readonly next: Maybe<Directory>,
  readonly node: Directory,
  readonly previous: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

export type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>,
  readonly absolutePath: Maybe<StringQueryOperatorInput>,
  readonly relativePath: Maybe<StringQueryOperatorInput>,
  readonly extension: Maybe<StringQueryOperatorInput>,
  readonly size: Maybe<IntQueryOperatorInput>,
  readonly prettySize: Maybe<StringQueryOperatorInput>,
  readonly modifiedTime: Maybe<DateQueryOperatorInput>,
  readonly accessTime: Maybe<DateQueryOperatorInput>,
  readonly changeTime: Maybe<DateQueryOperatorInput>,
  readonly birthTime: Maybe<DateQueryOperatorInput>,
  readonly root: Maybe<StringQueryOperatorInput>,
  readonly dir: Maybe<StringQueryOperatorInput>,
  readonly base: Maybe<StringQueryOperatorInput>,
  readonly ext: Maybe<StringQueryOperatorInput>,
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>,
  readonly dev: Maybe<IntQueryOperatorInput>,
  readonly mode: Maybe<IntQueryOperatorInput>,
  readonly nlink: Maybe<IntQueryOperatorInput>,
  readonly uid: Maybe<IntQueryOperatorInput>,
  readonly gid: Maybe<IntQueryOperatorInput>,
  readonly rdev: Maybe<IntQueryOperatorInput>,
  readonly ino: Maybe<FloatQueryOperatorInput>,
  readonly atimeMs: Maybe<FloatQueryOperatorInput>,
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>,
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>,
  readonly atime: Maybe<DateQueryOperatorInput>,
  readonly mtime: Maybe<DateQueryOperatorInput>,
  readonly ctime: Maybe<DateQueryOperatorInput>,
  readonly birthtime: Maybe<DateQueryOperatorInput>,
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>,
  readonly blksize: Maybe<IntQueryOperatorInput>,
  readonly blocks: Maybe<IntQueryOperatorInput>,
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<DirectoryEdge>,
  readonly nodes: ReadonlyArray<Directory>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'],
  readonly shadow: Scalars['String'],
  readonly opacity: Maybe<Scalars['Int']>,
};

export type File = Node & {
  readonly sourceInstanceName: Scalars['String'],
  readonly absolutePath: Scalars['String'],
  readonly relativePath: Scalars['String'],
  readonly extension: Scalars['String'],
  readonly size: Scalars['Int'],
  readonly prettySize: Scalars['String'],
  readonly modifiedTime: Scalars['Date'],
  readonly accessTime: Scalars['Date'],
  readonly changeTime: Scalars['Date'],
  readonly birthTime: Scalars['Date'],
  readonly root: Scalars['String'],
  readonly dir: Scalars['String'],
  readonly base: Scalars['String'],
  readonly ext: Scalars['String'],
  readonly name: Scalars['String'],
  readonly relativeDirectory: Scalars['String'],
  readonly dev: Scalars['Int'],
  readonly mode: Scalars['Int'],
  readonly nlink: Scalars['Int'],
  readonly uid: Scalars['Int'],
  readonly gid: Scalars['Int'],
  readonly rdev: Scalars['Int'],
  readonly ino: Scalars['Float'],
  readonly atimeMs: Scalars['Float'],
  readonly mtimeMs: Scalars['Float'],
  readonly ctimeMs: Scalars['Float'],
  readonly atime: Scalars['Date'],
  readonly mtime: Scalars['Date'],
  readonly ctime: Scalars['Date'],
  readonly birthtime: Maybe<Scalars['Date']>,
  readonly birthtimeMs: Maybe<Scalars['Float']>,
  readonly blksize: Maybe<Scalars['Int']>,
  readonly blocks: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>,
  readonly childImageSharp: Maybe<ImageSharp>,
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type FileConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<FileEdge>,
  readonly nodes: ReadonlyArray<File>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<FileGroupConnection>,
};


export type FileConnection_distinctArgs = {
  field: FileFieldsEnum
};


export type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  readonly next: Maybe<File>,
  readonly node: File,
  readonly previous: Maybe<File>,
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

export type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>,
  readonly absolutePath: Maybe<StringQueryOperatorInput>,
  readonly relativePath: Maybe<StringQueryOperatorInput>,
  readonly extension: Maybe<StringQueryOperatorInput>,
  readonly size: Maybe<IntQueryOperatorInput>,
  readonly prettySize: Maybe<StringQueryOperatorInput>,
  readonly modifiedTime: Maybe<DateQueryOperatorInput>,
  readonly accessTime: Maybe<DateQueryOperatorInput>,
  readonly changeTime: Maybe<DateQueryOperatorInput>,
  readonly birthTime: Maybe<DateQueryOperatorInput>,
  readonly root: Maybe<StringQueryOperatorInput>,
  readonly dir: Maybe<StringQueryOperatorInput>,
  readonly base: Maybe<StringQueryOperatorInput>,
  readonly ext: Maybe<StringQueryOperatorInput>,
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>,
  readonly dev: Maybe<IntQueryOperatorInput>,
  readonly mode: Maybe<IntQueryOperatorInput>,
  readonly nlink: Maybe<IntQueryOperatorInput>,
  readonly uid: Maybe<IntQueryOperatorInput>,
  readonly gid: Maybe<IntQueryOperatorInput>,
  readonly rdev: Maybe<IntQueryOperatorInput>,
  readonly ino: Maybe<FloatQueryOperatorInput>,
  readonly atimeMs: Maybe<FloatQueryOperatorInput>,
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>,
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>,
  readonly atime: Maybe<DateQueryOperatorInput>,
  readonly mtime: Maybe<DateQueryOperatorInput>,
  readonly ctime: Maybe<DateQueryOperatorInput>,
  readonly birthtime: Maybe<DateQueryOperatorInput>,
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>,
  readonly blksize: Maybe<IntQueryOperatorInput>,
  readonly blocks: Maybe<IntQueryOperatorInput>,
  readonly publicURL: Maybe<StringQueryOperatorInput>,
  readonly childImageSharp: Maybe<ImageSharpFilterInput>,
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<FileEdge>,
  readonly nodes: ReadonlyArray<File>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>,
  readonly ne: Maybe<Scalars['Float']>,
  readonly gt: Maybe<Scalars['Float']>,
  readonly gte: Maybe<Scalars['Float']>,
  readonly lt: Maybe<Scalars['Float']>,
  readonly lte: Maybe<Scalars['Float']>,
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>,
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

export enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

export type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>,
  readonly resolutions: Maybe<ImageSharpResolutions>,
  readonly fluid: Maybe<ImageSharpFluid>,
  readonly sizes: Maybe<ImageSharpSizes>,
  readonly original: Maybe<ImageSharpOriginal>,
  readonly resize: Maybe<ImageSharpResize>,
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
};


export type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
};


export type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  quality: Maybe<Scalars['Int']>,
  jpegQuality: Maybe<Scalars['Int']>,
  pngQuality: Maybe<Scalars['Int']>,
  webpQuality: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<ImageSharpEdge>,
  readonly nodes: ReadonlyArray<ImageSharp>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<ImageSharpGroupConnection>,
};


export type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>,
  readonly node: ImageSharp,
  readonly previous: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

export type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>,
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  readonly fluid: Maybe<ImageSharpFluidFilterInput>,
  readonly sizes: Maybe<ImageSharpSizesFilterInput>,
  readonly original: Maybe<ImageSharpOriginalFilterInput>,
  readonly resize: Maybe<ImageSharpResizeFilterInput>,
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>,
  readonly tracedSVG: Maybe<Scalars['String']>,
  readonly aspectRatio: Maybe<Scalars['Float']>,
  readonly width: Scalars['Float'],
  readonly height: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp: Maybe<Scalars['String']>,
  readonly srcSetWebp: Maybe<Scalars['String']>,
  readonly originalName: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>,
  readonly width: Maybe<FloatQueryOperatorInput>,
  readonly height: Maybe<FloatQueryOperatorInput>,
  readonly src: Maybe<StringQueryOperatorInput>,
  readonly srcSet: Maybe<StringQueryOperatorInput>,
  readonly srcWebp: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>,
  readonly originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>,
  readonly tracedSVG: Maybe<Scalars['String']>,
  readonly aspectRatio: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp: Maybe<Scalars['String']>,
  readonly srcSetWebp: Maybe<Scalars['String']>,
  readonly sizes: Scalars['String'],
  readonly originalImg: Maybe<Scalars['String']>,
  readonly originalName: Maybe<Scalars['String']>,
  readonly presentationWidth: Maybe<Scalars['Int']>,
  readonly presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>,
  readonly src: Maybe<StringQueryOperatorInput>,
  readonly srcSet: Maybe<StringQueryOperatorInput>,
  readonly srcWebp: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>,
  readonly sizes: Maybe<StringQueryOperatorInput>,
  readonly originalImg: Maybe<StringQueryOperatorInput>,
  readonly originalName: Maybe<StringQueryOperatorInput>,
  readonly presentationWidth: Maybe<IntQueryOperatorInput>,
  readonly presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<ImageSharpEdge>,
  readonly nodes: ReadonlyArray<ImageSharp>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>,
  readonly height: Maybe<Scalars['Float']>,
  readonly src: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>,
  readonly height: Maybe<FloatQueryOperatorInput>,
  readonly src: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>,
  readonly tracedSVG: Maybe<Scalars['String']>,
  readonly width: Maybe<Scalars['Int']>,
  readonly height: Maybe<Scalars['Int']>,
  readonly aspectRatio: Maybe<Scalars['Float']>,
  readonly originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG: Maybe<StringQueryOperatorInput>,
  readonly width: Maybe<IntQueryOperatorInput>,
  readonly height: Maybe<IntQueryOperatorInput>,
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>,
  readonly originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>,
  readonly tracedSVG: Maybe<Scalars['String']>,
  readonly aspectRatio: Maybe<Scalars['Float']>,
  readonly width: Scalars['Float'],
  readonly height: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp: Maybe<Scalars['String']>,
  readonly srcSetWebp: Maybe<Scalars['String']>,
  readonly originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>,
  readonly width: Maybe<FloatQueryOperatorInput>,
  readonly height: Maybe<FloatQueryOperatorInput>,
  readonly src: Maybe<StringQueryOperatorInput>,
  readonly srcSet: Maybe<StringQueryOperatorInput>,
  readonly srcWebp: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>,
  readonly originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>,
  readonly tracedSVG: Maybe<Scalars['String']>,
  readonly aspectRatio: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp: Maybe<Scalars['String']>,
  readonly srcSetWebp: Maybe<Scalars['String']>,
  readonly sizes: Scalars['String'],
  readonly originalImg: Maybe<Scalars['String']>,
  readonly originalName: Maybe<Scalars['String']>,
  readonly presentationWidth: Maybe<Scalars['Int']>,
  readonly presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>,
  readonly src: Maybe<StringQueryOperatorInput>,
  readonly srcSet: Maybe<StringQueryOperatorInput>,
  readonly srcWebp: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>,
  readonly sizes: Maybe<StringQueryOperatorInput>,
  readonly originalImg: Maybe<StringQueryOperatorInput>,
  readonly originalName: Maybe<StringQueryOperatorInput>,
  readonly presentationWidth: Maybe<IntQueryOperatorInput>,
  readonly presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  readonly content: Maybe<Scalars['String']>,
  readonly contentDigest: Scalars['String'],
  readonly description: Maybe<Scalars['String']>,
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly ignoreType: Maybe<Scalars['Boolean']>,
  readonly mediaType: Maybe<Scalars['String']>,
  readonly owner: Scalars['String'],
  readonly type: Scalars['String'],
};

export type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>,
  readonly contentDigest: Maybe<StringQueryOperatorInput>,
  readonly description: Maybe<StringQueryOperatorInput>,
  readonly fieldOwners: Maybe<StringQueryOperatorInput>,
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>,
  readonly mediaType: Maybe<StringQueryOperatorInput>,
  readonly owner: Maybe<StringQueryOperatorInput>,
  readonly type: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>,
  readonly ne: Maybe<Scalars['Int']>,
  readonly gt: Maybe<Scalars['Int']>,
  readonly gte: Maybe<Scalars['Int']>,
  readonly lt: Maybe<Scalars['Int']>,
  readonly lte: Maybe<Scalars['Int']>,
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>,
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>,
};


/** Node Interface */
export type Node = {
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};

export type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  readonly currentPage: Scalars['Int'],
  readonly hasPreviousPage: Scalars['Boolean'],
  readonly hasNextPage: Scalars['Boolean'],
  readonly itemCount: Scalars['Int'],
  readonly pageCount: Scalars['Int'],
  readonly perPage: Maybe<Scalars['Int']>,
};

export type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>,
  readonly turdSize: Maybe<Scalars['Float']>,
  readonly alphaMax: Maybe<Scalars['Float']>,
  readonly optCurve: Maybe<Scalars['Boolean']>,
  readonly optTolerance: Maybe<Scalars['Float']>,
  readonly threshold: Maybe<Scalars['Int']>,
  readonly blackOnWhite: Maybe<Scalars['Boolean']>,
  readonly color: Maybe<Scalars['String']>,
  readonly background: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

export type Query = {
  readonly file: Maybe<File>,
  readonly allFile: FileConnection,
  readonly directory: Maybe<Directory>,
  readonly allDirectory: DirectoryConnection,
  readonly sitePage: Maybe<SitePage>,
  readonly allSitePage: SitePageConnection,
  readonly imageSharp: Maybe<ImageSharp>,
  readonly allImageSharp: ImageSharpConnection,
  readonly site: Maybe<Site>,
  readonly allSite: SiteConnection,
  readonly sitePlugin: Maybe<SitePlugin>,
  readonly allSitePlugin: SitePluginConnection,
};


export type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  publicURL: Maybe<StringQueryOperatorInput>,
  childImageSharp: Maybe<ImageSharpFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>,
  sort: Maybe<FileSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  ino: Maybe<FloatQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>,
  sort: Maybe<DirectorySortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>,
  component: Maybe<StringQueryOperatorInput>,
  internalComponentName: Maybe<StringQueryOperatorInput>,
  componentChunkName: Maybe<StringQueryOperatorInput>,
  matchPath: Maybe<StringQueryOperatorInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  pluginCreator: Maybe<SitePluginFilterInput>,
  pluginCreatorId: Maybe<StringQueryOperatorInput>,
  componentPath: Maybe<StringQueryOperatorInput>
};


export type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>,
  sort: Maybe<SitePageSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>,
  resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  fluid: Maybe<ImageSharpFluidFilterInput>,
  sizes: Maybe<ImageSharpSizesFilterInput>,
  original: Maybe<ImageSharpOriginalFilterInput>,
  resize: Maybe<ImageSharpResizeFilterInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>,
  sort: Maybe<ImageSharpSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type Query_siteArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>,
  polyfill: Maybe<BooleanQueryOperatorInput>,
  pathPrefix: Maybe<StringQueryOperatorInput>,
  buildTime: Maybe<DateQueryOperatorInput>
};


export type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>,
  sort: Maybe<SiteSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  resolve: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs: Maybe<StringQueryOperatorInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
};


export type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>,
  sort: Maybe<SitePluginSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};

export type Site = Node & {
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly siteMetadata: Maybe<SiteSiteMetadata>,
  readonly polyfill: Maybe<Scalars['Boolean']>,
  readonly pathPrefix: Maybe<Scalars['String']>,
  readonly buildTime: Maybe<Scalars['Date']>,
};


export type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type SiteConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SiteEdge>,
  readonly nodes: ReadonlyArray<Site>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SiteGroupConnection>,
};


export type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  readonly next: Maybe<Site>,
  readonly node: Site,
  readonly previous: Maybe<Site>,
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___author = 'siteMetadata.author',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>,
  readonly polyfill: Maybe<BooleanQueryOperatorInput>,
  readonly pathPrefix: Maybe<StringQueryOperatorInput>,
  readonly buildTime: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SiteEdge>,
  readonly nodes: ReadonlyArray<Site>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  readonly path: Scalars['String'],
  readonly component: Scalars['String'],
  readonly internalComponentName: Scalars['String'],
  readonly componentChunkName: Scalars['String'],
  readonly matchPath: Maybe<Scalars['String']>,
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>,
  readonly pluginCreator: Maybe<SitePlugin>,
  readonly pluginCreatorId: Maybe<Scalars['String']>,
  readonly componentPath: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePageEdge>,
  readonly nodes: ReadonlyArray<SitePage>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SitePageGroupConnection>,
};


export type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageEdge = {
  readonly next: Maybe<SitePage>,
  readonly node: SitePage,
  readonly previous: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___strict = 'pluginCreator.pluginOptions.strict',
  pluginCreator___pluginOptions___projectPath = 'pluginCreator.pluginOptions.projectPath',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___emitSchema____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json = 'pluginCreator.pluginOptions.emitSchema._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json',
  pluginCreator___pluginOptions___emitSchema____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql = 'pluginCreator.pluginOptions.emitSchema._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql',
  pluginCreator___pluginOptions___emitPluginDocuments____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql',
  pluginCreator___pluginOptions___codegen = 'pluginCreator.pluginOptions.codegen',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___projectRoot = 'pluginCreator.pluginOptions.projectRoot',
  pluginCreator___pluginOptions___configDir = 'pluginCreator.pluginOptions.configDir',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>,
  readonly component: Maybe<StringQueryOperatorInput>,
  readonly internalComponentName: Maybe<StringQueryOperatorInput>,
  readonly componentChunkName: Maybe<StringQueryOperatorInput>,
  readonly matchPath: Maybe<StringQueryOperatorInput>,
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  readonly pluginCreator: Maybe<SitePluginFilterInput>,
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>,
  readonly componentPath: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePageEdge>,
  readonly nodes: ReadonlyArray<SitePage>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  readonly id: Scalars['ID'],
  readonly parent: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly resolve: Maybe<Scalars['String']>,
  readonly name: Maybe<Scalars['String']>,
  readonly version: Maybe<Scalars['String']>,
  readonly pluginOptions: Maybe<SitePluginPluginOptions>,
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly pluginFilepath: Maybe<Scalars['String']>,
  readonly packageJson: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePluginEdge>,
  readonly nodes: ReadonlyArray<SitePlugin>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SitePluginGroupConnection>,
};


export type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>,
  readonly node: SitePlugin,
  readonly previous: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___strict = 'pluginOptions.strict',
  pluginOptions___projectPath = 'pluginOptions.projectPath',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___emitSchema____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json = 'pluginOptions.emitSchema._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json',
  pluginOptions___emitSchema____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql = 'pluginOptions.emitSchema._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql',
  pluginOptions___emitPluginDocuments____home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments._home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql',
  pluginOptions___codegen = 'pluginOptions.codegen',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___projectRoot = 'pluginOptions.projectRoot',
  pluginOptions___configDir = 'pluginOptions.configDir',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

export type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>,
  readonly parent: Maybe<NodeFilterInput>,
  readonly children: Maybe<NodeFilterListInput>,
  readonly internal: Maybe<InternalFilterInput>,
  readonly resolve: Maybe<StringQueryOperatorInput>,
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly version: Maybe<StringQueryOperatorInput>,
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>,
  readonly browserAPIs: Maybe<StringQueryOperatorInput>,
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>,
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>,
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePluginEdge>,
  readonly nodes: ReadonlyArray<SitePlugin>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>,
  readonly description: Maybe<Scalars['String']>,
  readonly version: Maybe<Scalars['String']>,
  readonly main: Maybe<Scalars['String']>,
  readonly license: Maybe<Scalars['String']>,
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>,
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>,
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>,
  readonly version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>,
  readonly version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly description: Maybe<StringQueryOperatorInput>,
  readonly version: Maybe<StringQueryOperatorInput>,
  readonly main: Maybe<StringQueryOperatorInput>,
  readonly license: Maybe<StringQueryOperatorInput>,
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  readonly keywords: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>,
  readonly version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  readonly strict: Maybe<Scalars['Boolean']>,
  readonly projectPath: Maybe<Scalars['String']>,
  readonly outputPath: Maybe<Scalars['String']>,
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>,
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>,
  readonly codegen: Maybe<Scalars['Boolean']>,
  readonly name: Maybe<Scalars['String']>,
  readonly path: Maybe<Scalars['String']>,
  readonly short_name: Maybe<Scalars['String']>,
  readonly start_url: Maybe<Scalars['String']>,
  readonly background_color: Maybe<Scalars['String']>,
  readonly theme_color: Maybe<Scalars['String']>,
  readonly display: Maybe<Scalars['String']>,
  readonly icon: Maybe<Scalars['String']>,
  readonly projectRoot: Maybe<Scalars['String']>,
  readonly configDir: Maybe<Scalars['String']>,
  readonly pathCheck: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsEmitSchema = {
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json: Maybe<Scalars['Boolean']>,
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_introspection_json: Maybe<BooleanQueryOperatorInput>,
  readonly _home_jeremy_dev_gatsby_gatsby_starter_pnpm_ts__gatsby_graphql_schema_graphql: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  readonly strict: Maybe<BooleanQueryOperatorInput>,
  readonly projectPath: Maybe<StringQueryOperatorInput>,
  readonly outputPath: Maybe<StringQueryOperatorInput>,
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>,
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>,
  readonly codegen: Maybe<BooleanQueryOperatorInput>,
  readonly name: Maybe<StringQueryOperatorInput>,
  readonly path: Maybe<StringQueryOperatorInput>,
  readonly short_name: Maybe<StringQueryOperatorInput>,
  readonly start_url: Maybe<StringQueryOperatorInput>,
  readonly background_color: Maybe<StringQueryOperatorInput>,
  readonly theme_color: Maybe<StringQueryOperatorInput>,
  readonly display: Maybe<StringQueryOperatorInput>,
  readonly icon: Maybe<StringQueryOperatorInput>,
  readonly projectRoot: Maybe<StringQueryOperatorInput>,
  readonly configDir: Maybe<StringQueryOperatorInput>,
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>,
  readonly description: Maybe<Scalars['String']>,
  readonly author: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>,
  readonly description: Maybe<StringQueryOperatorInput>,
  readonly author: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>,
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>,
  readonly ne: Maybe<Scalars['String']>,
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly regex: Maybe<Scalars['String']>,
  readonly glob: Maybe<Scalars['String']>,
};

export type StockImageQueryVariables = {};


export type StockImageQuery = { readonly placeholderImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type SeoQueryVariables = {};


export type SeoQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type SiteTitleQueryVariables = {};


export type SiteTitleQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
