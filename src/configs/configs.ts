import { parse } from 'dotenv'
import * as fs from 'fs'
const filePath = '.env'

export const configData = parse(fs.readFileSync(filePath))