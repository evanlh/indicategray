module.exports = function(context, name, options) {
    if (context.template == name) {
        console.log(context, name);
        console.log(options);
        return options.fn(this);
    }
};
