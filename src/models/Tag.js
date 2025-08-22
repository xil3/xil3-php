class Tag {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static tags = [
        new Tag(1, 'Technology'),
        new Tag(2, 'Web Development'),
        new Tag(3, 'Consulting')
    ];

    static findAll() {
        return this.tags;
    }

    static findById(id) {
        return this.tags.find(tag => tag.id == id);
    }
}

module.exports = Tag;