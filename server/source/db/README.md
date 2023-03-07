# How to run MongoDB locally (Mac OS)

> Please be careful and be aware of what are you doing.

## Steps

### 1. Install [Homebrew](https://brew.sh/)

```sh
# Installs Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2. Find the MongoDB tap.

```sh
brew tap mongodb/brew
```

### 3. Install [MongoDB Community](https://www.mongodb.com/try/download/community) via Homebrew.

```sh
brew install mongodb-community
```

### 4. Create the `/data/db` folder in `System/Volumes/Data` (Catalina or higher).

```sh
sudo mkdir -p /System/Volumes/Data/data/db
```

### 5. Give permissions to the new folder

```sh
sudo chown -R `id -un` /System/Volumes/Data/data/db
```

### 6. Get the MongoDB service information

```sh
brew services info mongodb-community
```

### 7. Run MongoDB service (if you `start` the service it will be launched on your computer startup)

```sh
brew services run mongodb-community
```

### 8. Checking brew services status

```sh
brew services list
```

### 9. Run [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/) (it will ran successfully if you are connected to a mongo database)

```sh
mongosh
```

### 10. See the your database name

```sh
test> db
test
```

### 11. Create a new database (e.g. `my-social-media`)

```sh
test> use my-social-media
switched to db my-social-media
```

### 12. Find/Get all records in collection `thumbnails` (There will be no records)

```sh
my-social-media> db.thumbnails.find()
```

### 13. Insert a document/record into `thumbnails` collection

```sh
my-social-media> db.thumbnails.insertOne({
	imageURL: "https://picsum.photos/200/300",
	videoURL: "https://picsum.photos/200/300",
	altText: "This is an intro video",
});
{
  acknowledged: true,
  insertedId: ObjectId("63dd332f5c40b5781459f67a")
}
```

### 14. Find/Get all document (the last document was inserted in the previous step)

```sh
my-social-media> db.thumbnails.find()
```

### 15. Close MongoDB Shell pressing `Ctrl+C`

```sh
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
```

### 16. Stop MongoDB service

```sh
brew services stop mongodb-community
```

## Congrats, you are awesome! 🥳
