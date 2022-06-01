package handlers

import (
	"api/data"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func UpdateCargoLocation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/updatecargolocation" {
		http.NotFound(w, r)
		return
	}

	type location struct {
		ID       string `json:"id"`
		Location string `json:"location"`
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	l := location{}
	json.Unmarshal(bodyByte, &l)
	data.CargoUpdateLocation(l.ID, l.Location)
	cargo := data.GetCargoID(l.ID)
	cargoJSON, _ := json.Marshal(cargo)
	fmt.Fprint(w, string(cargoJSON))
}

func UpdateCargoStatus(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/updatecargostatus" {
		http.NotFound(w, r)
		return
	}

	type status struct {
		ID     string `json:"id"`
		Status string `json:"status"`
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	s := status{}
	json.Unmarshal(bodyByte, &s)
	data.CargoUpdateStatus(s.ID, s.Status)
	cargo := data.GetCargoID(s.ID)
	cargoJSON, _ := json.Marshal(cargo)

	fmt.Fprint(w, string(cargoJSON))
}
