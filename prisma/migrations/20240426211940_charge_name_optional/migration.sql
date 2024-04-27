/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createUser_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT NOT NULL,
    "typePost" TEXT NOT NULL,
    "typePet" TEXT NOT NULL,
    "locationView" TEXT NOT NULL,
    "dateView" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createUser" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_createUser_fkey" FOREIGN KEY ("createUser") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
