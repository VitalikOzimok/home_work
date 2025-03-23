const orders = [
  { id: 1, item: "Laptop", paid: true },
  { id: 2, item: "Phone", paid: false },
  { id: 3, item: "Tablet", paid: true },
];
const deliveryData = {
  1: "Delivered in 3 days",
  3: "Delivered in 5 days",
};
function fetchDeliveryInfo(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
    }, 1000);
  });
}

function processOrder() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(orders), 2_000);
  });
}

processOrder()
  .then((orders) => {
    console.log("Данные получены: ", orders);
    return orders.filter((elem) => elem.paid === true);
  })
  .then((orders) => {
    console.log("Оплаченные заказы: ", orders);
    // throw new Error("Хоба");
    return orders;
  })
  .then((orders) => {
    const deliveryPromises = orders.map((order) => {
      return fetchDeliveryInfo(order.id).then((deliveryInfo) => ({
        ...order,
        deliveryTime: deliveryInfo.deliveryTime,
      }));
    });
    return Promise.all(deliveryPromises);
  })
  .then((orders) => {
    console.log("Список заказов с информацией о доставке: ", orders);
  })
  .catch((err) => {
    console.log("Ошибка: ", err);
  });

    //Задача №2
    ///////////////////////////////////////////////////////////////////

class  DynamicFilter<T extends Record<string,any>>{
    private collection: T[] = []

    add(obj:T):void{
      this.collection.push(obj)
    }

    filter<K extends keyof T>(key:K,value:T[K]):T[]{
      return this.collection.filter(item => item[key] === value)
    }
    getAll(){
      console.log(this.collection)
    }
  }
  interface Person{
    name:string;
    age:number
  }

  const peopleFilter = new DynamicFilter<Person>();
  peopleFilter.add({ name: "Иван", age: 25 });
  peopleFilter.add({ name: "Вика", age: 30 });

  console.log(peopleFilter.getAll());
  console.log(peopleFilter.filter("age", 30));
