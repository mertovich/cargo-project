package routers

import (
	"api/handlers"
	"net/http"
)

func InitRoutes() {
	http.HandleFunc("/api/registercargo", handlers.RegisterCargo)
	http.HandleFunc("/api/getcargo", handlers.GetCargo)
	http.HandleFunc("/api/updatecargolocation", handlers.UpdateCargoLocation)
}
