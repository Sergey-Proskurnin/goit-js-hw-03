const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    
    // Пиши код ниже этой строки
    
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      let nameArray = []
      for (let potion of this.potions) {
           nameArray.push(potion.name)
          }        
                 if (nameArray.includes(potionName.name)) {
                     return`Зелье ${potionName.name} уже есть в инвентаре!`;
                      }
          this.potions.push(potionName)
          return this.potions
        },
//        
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
          if (potionName === this.potions[i].name) {
            this.potions.splice(i, 1);
            // console.table(this.potions);
            return;
          }        
        }
        return `Зелья ${potionName} нет в инвентаре!`;
      },
  
    updatePotionName(oldName, newName) {
  
      for (const index of this.potions){
        // console.log(index);
        index.name === oldName 
         ? index.name = newName
         : `Зелья ${oldName} нет в инвентаре!`
        }
    }
  }
  console.log(atTheOldToad.getPotions());
  // console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
  console.log(atTheOldToad.addPotion({ name: 'Каменная кожа', price: 520 }));
  // console.log(atTheOldToad.getPotions());
  // console.log(atTheOldToad.addPotion({ name: 'Каменная кожа', price: 520 }));
//   console.log(atTheOldToad.potions);
  // console.log(atTheOldToad.getPotions());
  // console.log(atTheOldToad.removePotion('Каменная кожа'));
  // console.log(atTheOldToad.getPotions());
  // console.log(atTheOldToad.removePotion('Зелье скорости'));
//   console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
//   console.log(atTheOldToad.getPotions());
  // console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));