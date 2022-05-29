package tools

import (
	"math/rand"
	"time"
)

func CreateID() string {
	dt := time.Now()
	id := dt.Format("20060102150405")
	for i := 0; i < 5; i++ {
		id += string(rune(97 + rand.Intn(26)))
	}
	return id
}
