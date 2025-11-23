// Replaced skills list per user request (Oct 2025)
// Assumptions: each skill gets a reasonable default `level` (0-100) and `years` value;
// `type` is inferred from the technology name. Colors are chosen from a simple palette.
const skills = [
  { id: "c", name: "C", type: "Language", level: 4, years: 4, color: "#A8A77A", icon: "code", order: 6 },
  { id: "csharp", name: "C#", type: "Language", level: 4, years: 3, color: "#239120", icon: "code", order: 5 },
  { id: "java", name: "Java", type: "Language", level: 5, years: 6, color: "#007396", icon: "code", order: 1 },
  { id: "javascript", name: "JavaScript", type: "Language", level: 5, years: 6, color: "#f7df1e", icon: "code", brandIcon: "js", order: 3 },
  { id: "php", name: "PHP", type: "Language", level: 4, years: 3, color: "#777bb4", icon: "code", brandIcon: "php", order: 2 },
  { id: "html", name: "HTML", type: "Language", level: 5, years: 7, color: "#e34f26", icon: "code", brandIcon: "html5", order: 6 },
  { id: "python", name: "Python", type: "Language", level: 4, years: 4, color: "#3776ab", icon: "code", brandIcon: "python", order: 4 },

  { id: "reactjs", name: "ReactJS", type: "Framework", level: 4, years: 5, color: "#61dafb", icon: "cubes", brandIcon: "react", order: 9 },
  { id: "flutter", name: "Flutter", type: "Framework", level: 3, years: 2, color: "#02569B", icon: "mobile", order: 11 }, 
  { id: "laravel", name: "Laravel", type: "Framework", level: 5, years: 2, color: "#FF2D20", icon: "feather", order: 8 },
  { id: "servlets", name: "Servlets", type: "Framework", level: 4, years: 3, color: "#6b7280", icon: "server", order: 10 },
  { id: "bootstrap", name: "Bootstrap", type: "Framework", level: 5, years: 4, color: "#7952B3", icon: "cubes", order: 12 }, 

  { id: "s3", name: "S3", type: "Cloud", level: 4, years: 2, color: "#569a31", icon: "cloud", order: 13 },
  { id: "dynamodb", name: "DynamoDB", type: "Cloud", level: 5, years: 1, color: "#4053D6", icon: "cloud", order: 14 },
  { id: "aws", name: "AWS", type: "Cloud", level: 4, years: 3, color: "#FF9900", icon: "cloud", brandIcon: "aws", order: 15 }, 
  { id: "apigateway", name: "AWS API Gateway", type: "Cloud", level: 5, years: 2, color: "#FF4F8B", icon: "cloud", order: 16 },
  { id: "cognito", name: "AWS Cognito", type: "Cloud", level: 4, years: 2, color: "#DD344C", icon: "cloud", order: 17 },
  { id: "sns", name: "AWS SNS", type: "Cloud", level: 4, years: 1, color: "#B7472A", icon: "cloud", order: 18 },
  { id: "sqs", name: "AWS SQS", type: "Cloud", level: 4, years: 1, color: "#FF9900", icon: "cloud", order: 19 },
  { id: "lambda", name: "AWS Lambda", type: "Cloud", level: 4, years: 2, color: "#FF9900", icon: "cloud", order: 20 },
  { id: "amplify", name: "AWS Amplify", type: "Cloud", level: 4, years: 1, color: "#FF9900", icon: "cloud", order: 21 },
  { id: "laravelcloud", name: "Laravel Cloud", type: "Cloud", level: 5, years: 1, color: "#FF2D20", icon: "cloud", order: 22 },
  { id: "hostinger", name: "Hostinger", type: "Cloud", level: 4, years: 2, color: "#673AB7", icon: "cloud", order: 23 },
  { id: "cloudflare", name: "CloudFlare", type: "Cloud", level: 4, years: 2, color: "#F38020", icon: "cloud", order: 24 },
  { id: "firebase", name: "Firebase", type: "Cloud", level: 3, years: 2, color: "#FFCA28", icon: "cloud", order: 25 },

  { id: "mysql", name: "MySQL", type: "Database", level: 5, years: 4, color: "#00758f", icon: "database", order: 26 }, 
  { id: "mssql", name: "Microsoft SQL Server", type: "Database", level: 4, years: 3, color: "#CC2927", icon: "database", order: 29 },
  { id: "sqlite", name: "SQLite", type: "Database", level: 4, years: 2, color: "#003b57", icon: "database", order: 28 }, 
  { id: "postgresql", name: "PostgreSQL", type: "Database", level: 5, years: 3, color: "#336791", icon: "database", order: 27 },

  { id: "selenium", name: "Selenium", type: "Tool", level: 3, years: 2, color: "#43B02A", icon: "wrench", order: 32 },
  { id: "googleanalytics", name: "Google Analytics", type: "Tool", level: 3, years: 2, color: "#E37400", icon: "wrench", order: 34 },
  { id: "github", name: "GitHub", type: "Tool", level: 5, years: 5, color: "#181717", icon: "wrench", order: 30 },
  { id: "junit", name: "JUnit", type: "Tool", level: 4, years: 3, color: "#25A18E", icon: "wrench", order: 33 },
  { id: "postman", name: "Postman", type: "Tool", level: 4, years: 2, color: "#FF6C37", icon: "wrench", order: 31 },

  { id: "css", name: "CSS", type: "Styling", level: 5, years: 7, color: "#264de4", icon: "palette", brandIcon: "css3", order: 35 },
  { id: "tailwind", name: "Tailwind", type: "Styling", level: 5, years: 3, color: "#38bdf8", icon: "cubes", order: 36 },

];

export default skills;
