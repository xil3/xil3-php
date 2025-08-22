const Article = require('../models/Article');
const Tag = require('../models/Tag');

const blogController = {
    index: (req, res) => {
        const articles = Article.findAll();
        res.render('blog/index', { articles });
    },

    show: (req, res) => {
        const article = Article.findById(req.params.id);
        res.render('blog/article', { article });
    },

    showAddForm: (req, res) => {
        res.render('blog/add');
    },

    showEditForm: (req, res) => {
        const article = Article.findById(req.params.id);
        res.render('blog/edit', { article });
    },

    create: (req, res) => {
        const { author, title, 'seo-title': seoTitle, body } = req.body;
        
        if (author && title && seoTitle && body) {
            const article = Article.create({ author, title, seoTitle, body });
            return res.redirect(`/blog/${article.id}/${article.seoTitle}`);
        }
        
        return res.redirect('/blog/funplace/add');
    },

    update: (req, res) => {
        const { author, title, 'seo-title': seoTitle, body } = req.body;
        const id = req.params.id;
        
        if (author && title && seoTitle && body) {
            const article = Article.update(id, { author, title, seoTitle, body });
            if (article) {
                return res.redirect(`/blog/${article.id}/${article.seoTitle}`);
            }
        }
        
        return res.redirect(`/blog/funplace/edit/${id}`);
    },

    getRightPanel: (req, res) => {
        const tags = Tag.findAll();
        return { tags };
    }
};

module.exports = blogController;