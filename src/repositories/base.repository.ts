import { Attributes, CreationAttributes, FindOptions, Model, ModelStatic } from 'sequelize';

class BaseRepository<T extends Model> {
   
    protected model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }   

    async create(data: CreationAttributes<T>): Promise<T> {
        return await this.model.create(data);
    }

    async findById(id: number | string): Promise<T | null> {
        return this.model.findByPk(id);
    }

    async findAll(options?: FindOptions): Promise<T[]> {
        return this.model.findAll(options);
    }

    async updateById(
        id: Attributes<T>['id'],
        data: CreationAttributes<T>,
    ): Promise<[affectedCount: number, affectedRows: T[]]> {
        const response = await this.model.update(data, { where: { id }, returning: true });
        return response;
    }

    async deleteById(id: Attributes<T>['id']): Promise<number> {
        return this.model.destroy({ where: { id } });
    }
}

export default BaseRepository;
