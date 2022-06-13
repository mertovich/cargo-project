package handlers

import (
	"api/data"
	"api/models"
	"api/tools"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func RegisterCargo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/registercargo" {
		http.NotFound(w, r)
		return
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	c := models.Cargo{}
	json.Unmarshal(bodyByte, &c)
	c.ID = tools.CreateID()
	cJSON, _ := json.Marshal(c)
	if data.SaveData(c) {
		fmt.Fprintf(w, string(cJSON))
	} else {
		fmt.Fprintf(w, "Error")
	}

}

func GetCargo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/getcargo" {
		http.NotFound(w, r)
		return
	}

	type cargoID struct {
		ID string `json:"id"`
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	c := cargoID{}
	json.Unmarshal(bodyByte, &c)
	cargo := data.GetCargoID(c.ID)
	cargoJSON, _ := json.Marshal(cargo)

	fmt.Fprint(w, string(cargoJSON))
}
