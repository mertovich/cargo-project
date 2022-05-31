package routers

import (
	"api/handlers"
	"net/http"
)

func InitUpdateCargoRoutes() {
	http.HandleFunc("/api/updatecargolocation", handlers.UpdateCargoLocation)
	http.HandleFunc("/api/updatecargostatus", handlers.UpdateCargoStatus)
}
