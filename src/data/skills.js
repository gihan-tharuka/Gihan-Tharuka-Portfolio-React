// Replaced skills list per user request (Oct 2025)
// Assumptions: each skill gets a reasonable default `level` (0-100) and `years` value;
// `type` is inferred from the technology name. Colors are chosen from a simple palette.
const skills = [
  { id: "c", name: "C", type: "Language", level: 4, years: 4, color: "#A8A77A", icon: "code" },
  { id: "csharp", name: "C#", type: "Language", level: 4, years: 3, color: "#239120", icon: "code" },
  { id: "java", name: "Java", type: "Language", level: 5, years: 6, color: "#007396", icon: "code" },
  { id: "javascript", name: "JavaScript", type: "Language", level: 5, years: 6, color: "#f7df1e", icon: "code", brandIcon: "js" },
  { id: "php", name: "PHP", type: "Language", level: 4, years: 3, color: "#777bb4", icon: "code", brandIcon: "php" },
  { id: "html", name: "HTML", type: "Language", level: 5, years: 7, color: "#e34f26", icon: "code", brandIcon: "html5" },
  { id: "css", name: "CSS", type: "Styling", level: 5, years: 7, color: "#264de4", icon: "palette", brandIcon: "css3" },
  { id: "python", name: "Python", type: "Language", level: 4, years: 4, color: "#3776ab", icon: "code", brandIcon: "python" },

  { id: "reactjs", name: "ReactJS", type: "Framework", level: 4, years: 5, color: "#61dafb", icon: "cubes", brandIcon: "react" },
  { id: "flutter", name: "Flutter", type: "Framework", level: 3, years: 2, color: "#02569B", icon: "mobile" },
  { id: "laravel", name: "Laravel", type: "Framework", level: 5, years: 2, color: "#FF2D20", icon: "feather" },
  { id: "tailwind", name: "Tailwind", type: "Styling", level: 5, years: 3, color: "#38bdf8", icon: "cubes" },
  { id: "selenium", name: "Selenium", type: "Tool", level: 3, years: 2, color: "#43B02A", icon: "wrench" },
  { id: "servlets", name: "Servlets", type: "Framework", level: 4, years: 3, color: "#6b7280", icon: "server" },

  { id: "mysql", name: "MySQL", type: "Database", level: 5, years: 4, color: "#00758f", icon: "database" },
  { id: "mssql", name: "Microsoft SQL Server", type: "Database", level: 4, years: 3, color: "#CC2927", icon: "database" },
  { id: "sqlite", name: "SQLite", type: "Database", level: 4, years: 2, color: "#003b57", icon: "database" },
  { id: "firebase", name: "Firebase", type: "Cloud", level: 3, years: 2, color: "#FFCA28", icon: "cloud" },
  { id: "postgresql", name: "PostgreSQL", type: "Database", level: 5, years: 3, color: "#336791", icon: "database" },

  { id: "s3", name: "S3", type: "Cloud", level: 4, years: 2, color: "#569a31", icon: "cloud" },
  { id: "dynamodb", name: "DynamoDB", type: "Cloud", level: 5, years: 1, color: "#4053D6", icon: "cloud" },
  { id: "aws", name: "AWS", type: "Cloud", level: 4, years: 3, color: "#FF9900", icon: "cloud", brandIcon: "aws" },
  { id: "apigateway", name: "AWS API Gateway", type: "Cloud", level: 5, years: 2, color: "#FF4F8B", icon: "cloud" },
  { id: "cognito", name: "AWS Cognito", type: "Cloud", level: 4, years: 2, color: "#DD344C", icon: "cloud" },
  { id: "sns", name: "AWS SNS", type: "Cloud", level: 4, years: 1, color: "#B7472A", icon: "cloud" },
  { id: "sqs", name: "AWS SQS", type: "Cloud", level: 4, years: 1, color: "#FF9900", icon: "cloud" },
  { id: "lambda", name: "AWS Lambda", type: "Cloud", level: 4, years: 2, color: "#FF9900", icon: "cloud" },
  { id: "amplify", name: "AWS Amplify", type: "Cloud", level: 4, years: 1, color: "#FF9900", icon: "cloud" },
  { id: "laravelcloud", name: "Laravel Cloud", type: "Cloud", level: 5, years: 1, color: "#FF2D20", icon: "cloud" },
  { id: "hostinger", name: "Hostinger", type: "Cloud", level: 4, years: 2, color: "#673AB7", icon: "cloud" },
  { id: "cloudflare", name: "CloudFlare", type: "Cloud", level: 4, years: 2, color: "#F38020", icon: "cloud" },
  { id: "googleanalytics", name: "Google Analytics", type: "Tool", level: 3, years: 2, color: "#E37400", icon: "wrench" },
  { id: "github", name: "GitHub", type: "Tool", level: 5, years: 5, color: "#181717", icon: "wrench" },

  { id: "junit", name: "JUnit", type: "Tool", level: 4, years: 3, color: "#25A18E", icon: "wrench" },

  { id: "postman", name: "Postman", type: "Tool", level: 4, years: 2, color: "#FF6C37", icon: "wrench" },

  { id: "bootstrap", name: "Bootstrap", type: "Framework", level: 5, years: 4, color: "#7952B3", icon: "cubes" },

];

export default skills;
