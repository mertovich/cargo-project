package routers

import (
	"api/handlers"
	"net/http"
)

func InıtCargoManagerRoutes() {
	http.HandleFunc("/api/registercargo", handlers.RegisterCargo)
	http.HandleFunc("/api/getcargo", handlers.GetCargo)
}
