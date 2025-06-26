-- CreateTable
CREATE TABLE "ItunesResult" (
    "id" SERIAL NOT NULL,
    "trackId" INTEGER NOT NULL,
    "artistName" TEXT NOT NULL,
    "trackName" TEXT NOT NULL,
    "artworkUrl" TEXT NOT NULL,
    "previewUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItunesResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItunesResult_trackId_key" ON "ItunesResult"("trackId");
