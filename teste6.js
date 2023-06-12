const getRoles = (user) => {
    let roles = user?.role === 'admin';
    return roles
};

module.exports = {
    getRoles,
};