package routers

import (
	"api/handlers"
	"net/http"
)

func InitRoutes() {
	http.HandleFunc("/", handlers.IndexHandler)
}
