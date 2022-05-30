package main

import (
	"api/routers"
	"api/server"
)

func main() {
	routers.InitRoutes()
	server.StartServer()
}
