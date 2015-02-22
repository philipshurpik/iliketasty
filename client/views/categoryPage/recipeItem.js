Template.recipeItem.helpers({
    likesCount: function() {
        return Likes.find({
            recipeId: this.recipeId
        }).count();
    }
});