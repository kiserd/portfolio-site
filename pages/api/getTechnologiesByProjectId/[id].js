
// import db from '../../../aws/dbcon'

// export default async function handler (req, res) {
//     const q =   `
//                 SELECT 
//                 t.* 
//                 FROM 
//                 technologies t 
//                 LEFT JOIN 
//                 projects_technologies pt 
//                 ON t.id = pt.technology_id
//                 LEFT JOIN 
//                 projects p 
//                 ON pt.project_id = p.id
//                 WHERE 
//                 p.id = ${req.query["id"]};
//                 `
//     const queryResult = await db.query(q);
//     res.status(200).json({ technologies: queryResult });
// }