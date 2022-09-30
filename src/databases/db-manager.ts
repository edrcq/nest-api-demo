// import { DataSource, getC } from 'typeorm'
// import { Todolist, Todo } from 'src/todos/entities'

// export const dataSources = {
//     'id1': new DataSource({
//         type: 'sqlite',
//         database: 'db1.sqlite',
//         synchronize: true,
//         entities: [ Todolist, Todo ]
//     }),
//     'id2': new DataSource({
//         type: 'sqlite',
//         database: 'db1.sqlite',
//         synchronize: true,
//         entities: [ Todolist, Todo ]
//     })
// }

// function getAndConnect(id: string) {
//     return dataSources[id].initialize()
// }

// dataSources['id1'].driver.disconnect()

// function initDataSources() {
//     // fetch les data
//     // for each (create a data source) ^ push to dataSources
// }
