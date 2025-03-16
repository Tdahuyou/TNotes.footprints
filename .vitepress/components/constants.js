import { repoName, ignore_dirs } from '../../.tnotes.json'

/**
 * 笔记仓库名儿
 */
export const REPO_NAME = repoName

/**
 * notes 目录下需要忽略的笔记目录
 * @example
 * [".vscode", "0000", "assets", "node_modules"]
 */
export const IGNORE_DIRS = ignore_dirs

/**
 * 存储本地笔记文件夹所在位置的 key
 */
export const NOTES_DIR_KEY = 'NOTES_DIR_KEY__' + repoName

/**
 * VitePress HOME README 文件名
 * 该文件内容基于 HOME README 而生成，作为 github pages 中的 README 文件，主要用于展示笔记的目录结构。
 */
export const TOC = 'TOC'
export const TOC_MD = TOC + '.md'

/**
 * 英语单词仓库基地址
 * https://github.com/Tdahuyou/en-words/blob/main/{word}.md
 */
export const EN_WORDS_REPO_BASE_URL = 'https://github.com/Tdahuyou/TNotes.en-words/blob/main/'