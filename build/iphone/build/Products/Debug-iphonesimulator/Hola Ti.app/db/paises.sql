DROP TABLE IF EXISTS "paises";
CREATE TABLE "paises" ("id_pais" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "nombre" VARCHAR);
INSERT INTO "paises" VALUES(1,'Mexico');
INSERT INTO "paises" VALUES(2,'Canada');
INSERT INTO "paises" VALUES(3,'Estados Unidos');
