export interface Business {
  _id: string
  title: string
  description: string
  tags: string[]
  logo: string
  details: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

export interface Job {
  salary_range?: SalaryRange
  _id: string
  job_title: string
  employment_type: string
  work_mode: string
  industry: string
  job_description: string
  location: string
  experience_level: string
  is_active: boolean
  created_at?: string
  updated_at?: string
  __v: number
}

export interface SalaryRange {
  min: number
  max: number
}