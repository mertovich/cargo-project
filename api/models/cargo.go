package models

import "encoding/json"

type Cargo struct {
	ID       string `json:"id"`
	Owner    string `json:"owner"`
	Adress   string `json:"adress"`
	Location string `json:"location"`
	Status   string `json:"status"`
}

func ParseCargo(jsonFile []byte) []Cargo {
	var cargo []Cargo
	json.Unmarshal(jsonFile, &cargo)
	return cargo
}
