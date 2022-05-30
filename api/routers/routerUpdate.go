package routers

import (
	"api/handlers"
	"net/http"
)

func InitUpdateCargoRoutes() {
	http.HandleFunc("/api/updatecargolocation", handlers.UpdateCargoLocation)
}
