import {
  getBranch as getBranch_,
  getCommit as getCommit_,
  getCommitMessage as getCommitMessage_,
  getMainBranch as getMainBranch_,
  getTargetBranch as getTargetBranch_,
  isMainBranch as isMainBranch_,
  isFork as isFork_,
  isMergeQueue as isMergeQueue_,
  // @ts-ignore
} from "../../../scripts/utils.mjs";

let __branch: string | undefined;
export const getBranch = () => {
  if (__branch === undefined) {
    __branch = getBranch_();
  }
  return __branch;
};

let __commit: string | undefined;
export const getCommit = () => {
  if (__commit === undefined) {
    __commit = getCommit_();
  }
  return __commit;
};

let __commitMessage: string | undefined;
export const getCommitMessage = () => {
  if (__commitMessage === undefined) {
    __commitMessage = getCommitMessage_();
  }
  return __commitMessage;
};

let __mainBranch: string | undefined;
export const getMainBranch = () => {
  if (__mainBranch === undefined) {
    __mainBranch = getMainBranch_();
  }
  return __mainBranch;
};

let __targetBranch: string | undefined;
export const getTargetBranch = () => {
  if (__targetBranch === undefined) {
    __targetBranch = getTargetBranch_();
  }
  return __targetBranch;
};

let __isMainBranch: boolean | undefined;
export const isMainBranch = () => {
  if (__isMainBranch === undefined) {
    __isMainBranch = isMainBranch_();
  }
  return __isMainBranch;
};

let __isFork: boolean | undefined;
export const isFork = () => {
  if (__isFork === undefined) {
    __isFork = isFork_();
  }
  return __isFork;
};

let __isMergeQueue: boolean | undefined;
export const isMergeQueue = () => {
  if (__isMergeQueue === undefined) {
    __isMergeQueue = isMergeQueue_();
  }
  return __isMergeQueue;
};