/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_nombre_key" ON "Product"("nombre");
