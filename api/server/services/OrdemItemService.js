import database from '../src/models';

class OrderItemService {
  static async getAllOrderItens() {
    try {
      return await database.Itens.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addOrderItem(newOrderItem) {
    try {
      return await database.Itens.create(newOrderItem)
    } catch (error) {
      throw error
    }
  }

  static async updateOrderItem(id, updateOrderItem) {
    try {
      const orderItemToUpdate = await database.Itens.findOne({
        where: { id: Number(id) }
      })

      if (orderItemToUpdate) {
        await database.Itens.update(updateOrderItem, { where: { id: Number(id) } })

        return updateOrderItem
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrderItem(id) {
    try {
      const theOrderItem = await database.Itens.findOne({
        where: { id: Number(id) }
      })

      return theOrderItem
    } catch (error) {
      throw error
    }
  }

    static async deleteOrderItem(id) {
      try {
        const orderItemToDelete = await database.Itens.findOne({ where: { id: Number(id) } })

        if (orderItemToDelete) {
          const deletedOrderItem = await database.Itens.destroy({
            where: { id: Number(id) }
          })
          return deletedOrderItem
        }
        return null
      } catch (error) {
        throw error
      }
    }
}

export default OrderItemService;