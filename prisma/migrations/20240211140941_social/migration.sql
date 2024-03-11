-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER,
    "department_id" INTEGER,
    "role" TEXT,
    "username" TEXT,
    "password" TEXT,
    "email" TEXT,
    "profile_image" TEXT,
    "contact_number" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "address" TEXT,
    "joining_date" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),
    "status" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "industry_type" TEXT NOT NULL,
    "company_size" TEXT NOT NULL,
    "ceo_name" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "website_url" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "hod_user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "likes_count" INTEGER NOT NULL,
    "comments_count" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follower" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "follower_user_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchHistory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "search_query" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
