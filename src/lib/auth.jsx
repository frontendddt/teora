
export async function getSession() {
    const isLoggedIn = false;

    return isLoggedIn ? {isAdmin: true} : null;
}