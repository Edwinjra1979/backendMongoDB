db.ingresos.aggregate( [ { $group : { _id: { "$concepto" } } } ] );

db.ingresos.aggregate( [ { $group : { _id : "$concepto" } } ] );

db.ingresos.aggregate( [ { $group : { _id : "$movimiento", ingresosTotal: { $sum: "$valor"} } } ] );

db.ingresos.aggregate( [ { $project: { ingresosTotal: { $sum: "$valor"} } } ] );
