function changePage(pageName){

    if (location.href.includes("github.io")) {

        location.replace("/compsci10finalproject" + pageName);

    }

    else {

        location.replace(pageName);

    }

}