/**
 * Adapted from https://facebook.github.io/react/docs/animation.html
 */

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: ['hello', 'world', 'click', 'me']
    };
  },
  handleAdd: function() {
    this.state.items.unshift(prompt('Enter some text'));
    this.setState({
      items: this.state.items
    });
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  },
  render: function() {
    var me = this;
    
    var items = me.state.items.map(function(item, i) {
      return React.DOM.div({
        key: item,
        className: 'item',
        onClick: function() {
          return me.handleRemove(i);
        }
      }, item);
    });
    
    var header = React.DOM.header({
    }, React.DOM.button({
      onClick: me.handleAdd
    }, 'Add'));
                          
    return React.DOM.div({
      className: 'list'
    }, header, React.addons.CSSTransitionGroup({
      transitionName: 'example'
    }, items));
  }
});

React.renderComponent(TodoList(), document.body);