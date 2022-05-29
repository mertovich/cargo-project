package routers

import (
	"api/handlers"
	"net/http"
)

func InitRoutes() {
	http.HandleFunc("/api/registercargo", handlers.RegisterCargo)
}
