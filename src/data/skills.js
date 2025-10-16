// Replaced skills list per user request (Oct 2025)
// Assumptions: each skill gets a reasonable default `level` (0-100) and `years` value;
// `type` is inferred from the technology name. Colors are chosen from a simple palette.
const skills = [
  { id: "c", name: "C", type: "Language", level: 80, years: 4, color: "#A8A77A", icon: "code" },
  { id: "csharp", name: "C#", type: "Language", level: 75, years: 3, color: "#239120", icon: "code" },
  { id: "java", name: "Java", type: "Language", level: 85, years: 6, color: "#007396", icon: "code" },
  { id: "javascript", name: "JavaScript", type: "Language", level: 90, years: 6, color: "#f7df1e", icon: "code", brandIcon: "js" },
  { id: "php", name: "PHP", type: "Language", level: 70, years: 3, color: "#777bb4", icon: "code", brandIcon: "php" },
  { id: "html", name: "HTML", type: "Markup", level: 95, years: 7, color: "#e34f26", icon: "code", brandIcon: "html5" },
  { id: "css", name: "CSS", type: "Styling", level: 90, years: 7, color: "#264de4", icon: "palette", brandIcon: "css3" },
  { id: "python", name: "Python", type: "Language", level: 80, years: 4, color: "#3776ab", icon: "code", brandIcon: "python" },

  { id: "reactjs", name: "ReactJS", type: "Framework", level: 90, years: 5, color: "#61dafb", icon: "cubes", brandIcon: "react" },
  { id: "flutter", name: "Flutter", type: "Framework", level: 70, years: 2, color: "#02569B", icon: "mobile" },
  { id: "laravel", name: "Laravel", type: "Framework", level: 65, years: 2, color: "#FF2D20", icon: "feather" },
  { id: "tailwind", name: "Tailwind", type: "Framework", level: 85, years: 3, color: "#38bdf8", icon: "cubes" },
  { id: "selenium", name: "Selenium", type: "Tool", level: 70, years: 2, color: "#43B02A", icon: "wrench" },
  { id: "servlets", name: "Servlets", type: "Framework", level: 75, years: 3, color: "#6b7280", icon: "server" },

  { id: "mysql", name: "MySQL", type: "Database", level: 85, years: 4, color: "#00758f", icon: "database" },
  { id: "mssql", name: "Microsoft SQL Server", type: "Database", level: 80, years: 3, color: "#CC2927", icon: "database" },
  { id: "sqlite", name: "SQLite", type: "Database", level: 75, years: 2, color: "#003b57", icon: "database" },
  { id: "firebase", name: "Firebase", type: "Service", level: 75, years: 2, color: "#FFCA28", icon: "cloud" },
  { id: "postgresql", name: "PostgreSQL", type: "Database", level: 80, years: 3, color: "#336791", icon: "database" },

  { id: "s3", name: "S3", type: "Service", level: 75, years: 2, color: "#569a31", icon: "cloud" },
  { id: "dynamodb", name: "DynamoDB", type: "Service", level: 70, years: 1, color: "#4053D6", icon: "cloud" },
  { id: "aws", name: "AWS", type: "Cloud", level: 80, years: 3, color: "#FF9900", icon: "cloud", brandIcon: "aws" },
];

export default skills;
