import database from '../src/models';

class TableService {
  static async getAllTables() {
    try {
      return await database.Tables.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addTable(newTable) {
    try {
      return await database.Tables.create(newTable)
    } catch (error) {
      throw error
    }
  }

  static async updateTable(id, updateTable) {
    try {
      const tableToUpdate = await database.Tables.findOne({
        where: { id: Number(id) }
      })

      if (tableToUpdate) {
        await database.Tables.update(updateTable, { where: { id: Number(id) } })

        return updateTable
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getTable(id) {
    try {
      const theTable = await database.Tables.findOne({
        where: { id: Number(id) }
      })

      return theTable
    } catch (error) {
      throw error
    }
  }

    static async deleteTable(id) {
      try {
        const tableToDelete = await database.Tables.findOne({ where: { id: Number(id) } })

        if (tableToDelete) {
          const deletedTable = await database.Tables.destroy({
            where: { id: Number(id) }
          })
          return deletedTable
        }
        return null
      } catch (error) {
        throw error
      }
    }
}

export default TableService;