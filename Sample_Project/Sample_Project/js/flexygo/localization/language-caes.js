/**
 * @namespace flexygo.culture.caes
 */
var flexygo;
(function (flexygo) {
    var culture;
    (function (culture) {
        var caes;
        (function (caes) {
            caes.process = {
                executing: 'Executant el procés...',
            };
            caes.dependecymanager = {
                sort: 'Ordena',
                valuedep: 'Valor Dep.',
                classdep: 'Classe Dep.',
                combodep: 'Combo Dep.',
                enabledep: 'Habilitar Dep.',
                visibledep: 'Dep. Visible',
                requireddep: 'Dep. Requirida',
                CustomProperty: 'Custom Property Dep.',
                save: 'Desa',
                addmore: 'Afegeix més propietats depenents',
                sqlvalue: 'Valor SQL',
                sqlclass: 'Classe SQL',
                sqlcombofilter: 'Filtre combo SQL',
                sqlcombosentence: 'Sentencia combo SQL',
                enabledvalues: 'Valors Habilitats',
                disabledvalues: 'Valors Deshabilitats',
                sqlenabledsentence: 'Sentencia habilitades SQL',
                visiblevalues: 'Valors Visibles',
                hiddenvalues: 'Valors ocults',
                visiblesentence: 'Sentencies visibles SQL',
                requiredvalues: 'Valors Requerits',
                notrequiredvalues: 'Valors no Requerits',
                requiredsentence: 'Sentencies requerides SQL',
                description: 'Descripció',
                valueApply: 'Valors afectats',
                CusPropertyName: 'Nom Custom Control',
                SQLCustomProperty: 'SQL Custom Property',
                connectionstrings: 'Cadenas de conexión',
                connStringvalues: 'valores de conexión'
            };
            caes.develop = {
                developer: 'Desenvolupador',
                adminarea: 'Àrea d&#39;administració',
                help: 'Ajuda',
                dependencymanager: 'Gerent de Dependència',
                filtermanager: 'Administrador del filtre',
                modulemanager: 'Administrador del Modul ',
                nodemanager: 'Administrador del node',
                settings: 'Configuració',
                wizard: 'Assistent',
                editproperties: 'Editar les Propietats',
                modules: 'Moduls',
                collection: 'Colecció',
                page: 'Pàgina',
                object: 'Objecte',
                imagemanager: 'Configuració d&#39;Imatge',
                documentmanager: 'Configuració de Documents',
                mailmanager: 'Configuració de correu',
                viewobject: 'Vista de l&#39;objecte',
                security: 'Seguretat',
                objectsecurity: 'Seguretat de l&#39;Objecte',
                objectprocesssecurity: 'Segurtetat del procés de l&#39;Objecte',
                selectobject: 'Selecciona una pàgina que contingui un objecte',
                objectpropertysecurity: 'Seguretat de la propietat',
                pageSettings: 'Configuració de pàgina',
                chatter: 'Chatter',
            };
            caes.history = {
                historyempty: 'Historial de la navegació buit',
                showmore: 'Mostrar més',
            };
            caes.msg = {
                confirm: 'Confirmeu',
                fieldrequired: 'Camp requerit',
                copied: 'Copiat',
            };
            caes.navigation = {
                relatedobjects: 'Objectes relacionats',
                reports: 'Informes',
                noelements: 'Element no existent',
                popupwarning: 'Pop-up windows bloquejades pel navegador. Per favor, canvia paràmetres',
            };
            caes.flxfilter = {
                searchplaceholder: 'Cecar per: ',
                showall: 'Mostrar tot',
            };
            caes.flxkanban = {
                addCard: 'Afegir nou',
            };
            caes.flxarea = {
                noprocesses: 'Cap procés',
                clickexpand: 'Clic per ampliar/col·lapsar els processos',
            };
            caes.flxedit = {
                addfields: 'Afegeix camps',
                selectall: 'Seleccionar tot',
                selectnone: 'No seleccionar cap',
                createwarning: 'Selecciona un camp com a mínim',
                appendwarning: 'Selecciona un tipus de camp i un nom de camp',
                createfields: 'Create new table fields',
                enterfieldname: 'Field Name',
                selecttype: 'Selecciona el tipus de dades',
                seedependencies: 'Veure dependències',
                templates: 'Plantilles',
                objectsettings: 'Pàrametres de l&#39;Objecte',
                label: 'Etiqueta',
                style: 'Estil',
                classname: 'Nom de la classe',
                selecticon: 'Selecciona una Icona',
                selectcontroltype: 'Selecciona un tipus de control',
                locked: 'Bloquejat',
                required: 'Requerit',
                hidden: 'Ocult',
                addseparatora: 'Afegeix Separador damunt',
                addseparatorb: 'Afegeix Separador sota',
                addplaceholder: 'Afegir marcador de posició',
                save: 'Desa',
                close: 'Tancar',
                areyousuretitle: 'Canvis no guardats',
                areyousuremsg: 'Segur que vols tancar aquesta pàgina?',
                areyousuremsgyes: 'Sí',
                areyousuremsgno: 'No',
                emptyproperty: 'Propietat buida',
                addproperties: 'Afegeix propietats',
                propertyname: 'Nom de la Propietat',
                propertylabel: 'Etiqueta de la propietat',
                adddetachedproperty: 'Afegir propietat separada ',
                loadmore: 'Desplaça\'t per carregar-ne més',
            };
            caes.flxeditgrid = {
                addrow: 'Afegeix fila',
                removeselection: 'Esborrar selecció',
                hide: 'Ocult',
                settings: 'Paràmetres',
                deleteconfirm: 'Vols esborrar tot elements seleccionats?',
                startinfo: 'Primer ha de configurar el editgrid',
            };
            caes.flxgipe = {
                butonadd: 'Afegeix',
                buttonload: 'Carrega',
                buttonsave: 'Desa',
                buttoncancel: 'Cancel·lar',
                dialogloadtitle: 'Carrega workflow',
                dialogsavetitle: 'Desa workflow',
                dialogpropertiestitle: 'Propietats',
                dialogtemplatetitle: 'Seleccionar plantilla',
                dialogdebugtitle: 'Depurar execució',
                errornoworkflowselected: 'Selecciona un flux de treball per carregar',
                errornoversionselected: 'Selecciona una versio del flux de treball',
                confirmunsavedchanges: 'Tens canvis sense guardar, estàs segur que vols continuar?',
                labelarea: 'Àrea:',
                labelmodule: 'Mòdul:',
                labelname: 'Nom:',
                labeldescrip: 'Descripció:',
                labelversion: 'Versió:',
                labeltop: 'A dalt:',
                labelleft: 'Esquerra:',
                labelheight: 'Altura:',
                labelwidth: 'Amplada:',
                labellabel: 'Etiqueta:',
                labelobject: 'Objecte:',
                labelprocess: 'Procés:',
                labelworkflow: 'Flux de treball:',
                labeldecission: 'Decissió:',
                labelevent: 'Acte:',
                labelactive: 'Actiu:',
                labelstatus: 'Estat:',
                labelresult: 'Resultat:',
                labelerrormessage: 'Missatge d&#39;Error:',
                labelrelations: 'Relacions de Paràmetre:',
                labeloutputparams: 'Paràmetres de sortida:',
                labelbackgroundcolor: 'Color de fons:',
                labelbordercolor: 'Color del marge:',
                labeltextcolor: 'Color del text:',
                treeinnode: 'Paràmetres d&#39;entrada:',
                treeoutnode: 'Paràmetres de sortida:',
                workflowareaplaceholder: 'Seleccioneu l&#39;àrea...',
                workfloworiginplaceholder: 'Seleccioneu  l&#39;origen...',
                workflowmoduleplaceholder: 'Seleccioneu el mòdul...',
                workflownameplaceholder: 'Introduïu el nom...',
                workflowversionplaceholder: 'Seleccioneu la versió...',
                searchtemplates: 'Cercar plantilles...',
                editortemplates: {
                    process: 'Procés',
                    object: 'Objecte',
                    decission: 'Decissió',
                    event: 'Acte',
                    workflow: 'Flux de treball',
                    label: 'Etiqueta',
                    toggleall: 'Marcar / desmarcar-ho tot ',
                },
                editortoolbar: {
                    new: 'Nou',
                    open: 'Obrir',
                    save: 'Desa',
                    generate: 'Genera',
                    up: 'Dalt',
                    down: 'Baix',
                    run: 'Executar',
                    debug: 'Depurar',
                    select: 'Seleccionar',
                    pan: 'Pan',
                    undo: 'Desfer',
                    redo: 'Refer',
                    cut: 'Tallar',
                    copy: 'Copiar',
                    paste: 'Pegar',
                    delete: 'Esborrar',
                    group: 'Grup',
                    ungroup: 'Desagrupar',
                    workflow: 'Flux de treball',
                    object: 'Objecte',
                    process: 'Procés',
                    decission: 'Decisió',
                    event: 'Acte',
                    connect: 'Connectar',
                    fit: 'Ajust',
                    zoomin: 'Zoom In',
                    zoomout: 'Zoom Out',
                    actualsize: 'Mida actual',
                    templates: 'Plantilles',
                    properties: 'Propietats',
                    label: 'Etiqueta',
                },
                messages: {
                    savefirst: 'Desa el gràfic abans de generar el flux de treball',
                    workflowgenerated: 'Flux de treball generat amb èxit',
                    workflowsaved: 'Flux de treball guardat amb èxit',
                },
                popupmenu: {
                    workflowproperties: 'Propietats del flux de treball',
                    view: 'Vista',
                    properties: 'Propietats',
                    enter: 'Entrar',
                    new: 'Nou',
                    listparams: 'Veure paràmetres',
                },
            };
            caes.filtermanager = {
                choosefilter: 'Triar el filtre',
                objectname: 'Objecte',
                filtertype: 'Tipus de filtre',
                properties: 'Propietats',
                fields: 'Camps',
                unsaved: 'Hi ha canvis sense guardar, vols continuar?',
                sure: 'Estàs segur?',
                add: 'Afegir',
                errornofilter: 'Afegeix un filtre nou primer.',
                errornofields: 'Afegeix alguns camps primer.',
                save: 'Desa',
                delete: 'Esborrar',
            };
            caes.sortmanager = {
                sort: 'Ordenar',
                apply: 'Aplicar',
                clean: 'Netejar',
            };
            caes.flxlist = {
                noentriesfound: 'No s’han trobat entrades.',
                warning: 'El mòdul no té plantilla, però té una cadena html específica al mòdul. Mostra la configuració del mòdul.',
                currentfiltervalues: 'Desa els valors actuals del filtre.',
                removecurrentfiltervalues: 'Confirmeu que voleu eliminar els valors de filtre seleccionats.',
                name: 'Nom',
                generic: 'Genèric',
                savefilter: 'Desa el filtre',
                selectfilterfirst: 'Seleccioneu primer un filtre',
                save: 'Desa',
            };
            caes.flxmail = {
                nomails: 'No hi ha cap correu trobat ',
                nosettings: 'El vostre compte de correu electrònic no s’ha configurat.Feu clic per configurar-lo.',
                loadmore: 'Carrega’ls més ',
                folders: 'Carpetes',
                address: 'Adreça',
                subject: 'Matèria',
                body: 'Cos',
                mindate: 'Data  mínima',
                maxdate: 'Data  máxima',
                unseen: 'Només no llegits',
            };
            caes.flxmodule = {
                delete: 'Esborrar',
                save: 'Desa',
                new: 'Nou',
                edit: 'Editar',
                view: 'Vista',
                print: 'Imprimir',
                help: 'Ajuda',
                settings: 'Configuració',
                process: 'Procés',
                report: 'Informe',
                export: 'Exportar',
                back: 'Enrere',
                unknown: 'Funció desconeguda',
                templates: 'Plantilles',
                noprop: 'Mòdul sense propietats. ',
                requiredsaving: 'Completeu tots els camps obligatoris abans de desar.. Like :',
                noparams: 'No hi ha paràmetres per recuperar.',
                requiredrunning: 'Completeu tots els camps obligatoris abans d&#39;executar el procés',
                requiredreport: 'Completeu tots els camps obligatoris abans d&#39;obrir l&#39;informe',
                deleted: 'Eliminat :)',
                saved: 'Desada :)',
                uniqueBagError: 'Camp d&#39;identificador únic sense definir.',
                nofieldBagError: 'No es pot trobar el camp <b> {0} </b> a la fila actual. Afegiu-la per consultar o eliminar el botó de selecció..',
                noItemsSelected: 'Primer seleccioneu alguns elements de la llista.',
            };
            caes.flxnav = {
                notimplemented: 'El node d&#39;acció no s&#39;ha implementat',
                pIdNotespecified: 'L&#39;identificador del procés no està especificat',
                urlnotespecified: 'Url no especificat',
                autoSQlnovalidtype: 'Auto generador SQL no és un tipus de node vàlid.',
                webcomponentnotspecified: 'El component web no està especificat.',
                helpidnotspecified: 'ID d&#39;ajuda no especificat',
                moreinfo: 'Més informació.',
            };
            caes.image = {
                browsebutton: 'Navegador',
                browsebuttontooltip: 'Podeu exxplorar o arrossegar una imatge',
                savebutton: 'Desa',
                removebutton: 'Esborrar',
                cropbutton: 'Recol·lectar',
                movebutton: 'Moure',
                zoombutton: 'Ampliar',
                rotatebutton: 'Rotar',
                scalebutton: 'Escalar',
                aspectratiobutton: 'Proporció d&#39;Aspecte',
                resetbutton: 'Reiniciar',
                free: 'Lliure',
                errorfiletype: 'Només accepta imatges',
                errorfilenumber: 'Només accepta una imatge',
                infotostart: 'Explora o arrossega una imatge per iniciar',
                errorfilename: 'La imatge no té nom',
                errorrootpath: 'Root Path',
            };
            caes.documentmanager = {
                upload: 'Carregar',
                info: 'Exploreu o arrossegueu una imatge',
                saved: 'Desada',
                save: 'Desa',
                return: 'Tornar',
                removed: 'Esborrat',
                errorsaving: 'Error en desar',
                errorremoving: 'Error al esborar',
                copy: 'Copiar al portapapers',
                preview: 'Vista prèvia',
                edit: 'Editar',
                remove: 'Eliminar',
                disk: 'Disc',
                diskfiles: 'Fitxers',
                diskfolders: 'Carpetes',
                drive: 'Drive',
                dropbox: 'Dropbox',
                download: 'Descarregar',
                link: 'Enllaç',
                filter: 'Filtres',
                folderorfile: 'Carpeta o fitxer',
                browsernotsupported: 'El vostre navegador no és compatible',
                settings: 'Configuració',
                permissionerror: 'Ho sentim, no teniu permisos',
                documentempty: 'Document buit',
                view: 'veure',
            };
            caes.imagemanager = {
                upload: 'Carregar',
                settings: 'Configuració',
                msgremove: 'Esteu segur que voleu eliminar la imatge ?',
                msgremoveall: 'Esteu segur que voleu eliminar TOTES les imatges?',
                removed: 'S&#39;ha eliminat la imatge',
                removedall: 'Totes les imatges S&#39;han eliminat',
                errorremoving: 'Error en eliminar la imatge',
                uploaded: 'S&#39;ha carregat la imatge',
                erroruploading: 'S&#39;ha produït un error al carregar la imatge',
                updated: 'Imatge actualitzada',
                errorupdating: 'S&#39;ha produït un error al actualitzar la imatge',
                permissionerror: 'Ho sentim, no teniu permisos',
                imageepmty: 'Imatge buida',
                downloadall: 'Descarregar totes les imatges',
                deleteall: 'Esborar totes les imatges',
                errordownload: 'S&#39;ha produït un error al descarregar les imatges',
                noimages: 'No hi ha cap imatge',
            };
            caes.upload = {
                uploaded: 'Carregat',
                error: 'Error de càrrega ',
                info: 'Arrossegueu per carregar',
            };
            caes.file = {
                saved: 'S&#39;ha desat el fitxer ;)',
                errorsaving: 'Error en desar el fitxer :(',
                resultbase64: '1 fitxer a base64',
            };
            caes._export = {
                success: 'S&#39;ha exportat correctament les dades ;)',
                error: 'S&#39;ha produït un error al exportar dades :(',
                exportinglist: 'Exportant la llista',
            };
            caes.menumanager = {
                deleteMenu: 'Esborrar menu',
                deleteMenuquestion: '¿Està segur que vol esborrar aquest menu i tots els seus fills?',
                empty: 'Creeu un menú nou per navegar!',
                menus: 'Menús',
                new: 'Nou',
                refresh: 'Refrescar',
                moreoptions: 'Més opcions',
                delete: 'Borrar',
                edit: 'Editar',
                submenus: 'Submenús',
                newsubmenu: 'Submenú nou',
            };
            caes.modulemanager = {
                save: 'Desa',
                searchmodules: 'Cercar mòduls',
                cancel: 'Cancel · lar',
                tabid: 'Identificador de pestanya',
                tabtitle: 'Títol de la pestanya',
                tabdescrip: 'Descripció de la pestanya',
                selecttabicon: 'Seleccioneu la icona de la pestanya',
                classification: 'Classificació',
                addnewtabmodule: 'Afegir un mòdul de pestanya nou',
                changepagerelation: 'Canviar la relació del mòdul de pàgina',
                configmodule: 'Configuració del Mòdul',
                removemodule: 'Eliminar el mòdul',
                events: 'Actes adjunts',
                security: 'Seguretat del mòdul',
                tabMode: 'Model de pestanya',
            };
            caes.moduletab = {
                emptytabs: 'Pestanyes buides',
                nocontent: 'Sense contingut.',
            };
            caes.nodemanager = {
                save: 'Save',
                title: 'Gestor de nodes',
                deletenode: 'Eliminar el node',
                deletenodequestion: 'Esteu segur que voleu eliminar aquest node?',
                addfields: 'Afegir camps',
            };
            caes.objectmanager = {
                selecticon: 'Seleccionar la icona',
                validicon: 'Heu d&#39;introduir un nom de classe d&#39;icona vàlid',
                objectname: 'Nom de l&#39;objecte',
                validobjectname: 'Heu d&#39;introduir un nom d&#39;objecte',
                objectdescription: 'Descripció de l&#39;objecte',
                validobjectdescription: 'Heu d&#39;introduir una descripció de l&#39;objecte',
                collectionname: 'Nom de la col·lecció',
                validcollectionname: 'Heu d&#39;introduir un nom de la colecció',
                collectiondescription: 'Descripció de la col·lecció',
                validcollectiondescription: 'Heu d&#39;introduir una descripció de la col·lecció',
                datasource: 'Font de dades',
                fromtable: 'De la taula',
                fromview: 'Des de la vista',
                fromnewtable: 'D&#39;una taula nova',
                selectcnnstring: 'Seleccioneu la cadena de connexió',
                validcnnstring: 'Heu d&#39;introduir una cadena de connexió vàlida',
                selecttable: 'Seleccioneu l&#39;origen',
                validorigin: 'Heu d&#39;introduir un origen vàlid',
                newtablename: 'Nom de la taula nova',
                validnewtablename: 'Heu d&#39;introduir un nom de taula',
                viewkeyfields: 'Veure els camps clau',
                validviewkeyfields: 'Heu d&#39;introduir una vista de camps clau',
                savecontinue: 'Desa i continuar',
                continue: 'Continuar',
                listtemplate: 'Llista de plantilla',
                edittemplate: 'Editar la plantilla',
                viewtemplate: 'Veure la plantilla',
                objectcreated: 'Objecte creat',
                selectoption: 'Seleccioneu una opció',
                listform: 'Mostrar el formulari <b> Llista </b>.',
                editform: 'Mostrar el formulari <b> Edita </b>.',
                objectconfig: 'Mostrar la configuració <b> Objecte </b>.',
                collectionconfig: 'Mostrar la configuració de <b> Col·lecció </b>.',
                showrelations: 'Mostrar <b> relacions </b>',
                saved: 'Desat',
                basicinfo: 'Informació bàsica',
                objectproperties: 'Propietats de l&#39;objecte',
                listsettings: 'Configuració de la llista',
                displaysettings: 'Configuració de la plantilla',
                end: 'Acabar',
                colproperties: 'Editar les propietats de la graella (opcional)',
                save: 'Desa',
            };
            caes.flxpropertymanager = {
                addfields: 'Feu clic al botó "afegir camps" per començar.',
                label: 'Etiqueta',
                style: 'Estil',
                classname: 'Nom de la classe',
                selecticon: 'Seleccioneu una icona',
                selectcontroltype: 'Seleccioneu un tipus de control',
                locked: 'Bloquejat',
                required: 'Obligatori',
                hidden: 'Oculta',
                addseparatora: 'Afegir el separador a dalt',
                addseparatorb: 'Afegir el separador a baix',
                addplaceholder: 'Afegir Place holder',
                save: 'Desa',
                close: 'Tancar',
                hasdefinition: 'Revisi a la taula la propietat:',
            };
            caes.flxversioninfo = {
                currentversion: 'Versió actual ({{CurrentVersion}}).',
                lastversion: 'Darrera versió ({{LastVersion}}).',
                updatedversion: 'L&#39;aplicació està actualitzada.',
                pendingchanges: 'hi ha canvis pendents de revisió',
                reviewchanges: 'Mostra els canvis pendents',
                newupdate: 'Hi ha una nova actualització disponible ({{LastVersion}}).',
                update: 'Actualització',
                info: 'Informació',
                test: 'Mostrar la prova',
                delete: 'Eliminar',
                deleting: 'Eliminar la versió',
                updating: 'Actualització',
                initupdate: 'Inicialització de l&#39;actualització...',
                estatusupdatingservice: 'Actualització del servei...',
                estatuscheckingpackages: 'comprovació de paquets...',
                estatusdownloadingversion: 'Descarregant la versió nova ...',
                estatusfinished: 'Acabat',
                estatusupdatedatabase: 'Actualització de la base de dades...',
                estatusupdateiis: 'Actualització de l&#39;aplicació web...',
                applicationwillreset: 'S&#39;està reiniciant l’aplicació',
                updatesuccessful: 'Actualització completada amb èxit!',
                oldversion: 'Versió antiga ({{VersionNumber}})',
                newversion: 'Nova versió ({{VersionNumber}})',
                confirmupdate: 'Esteu segur que voleu actualitzar l&#39;aplicació?',
                confirmdelete: 'Esteu segur que voleu eliminar la versió?',
                deletesuccessful: 'Eliminat amb exit!',
                infotitle: 'Informació sobre la versió',
                infoversion: 'Versió número:',
                infopath: 'Direcció virtual:',
                infodatabase: 'Base de dades:',
                confirmwarningtitle: 'Advertència!',
                confirmwarninglabel: 'Confirmeu aquestes accions:',
                switch: 'Canviar',
                confirmswitch: 'Esteu segur que voleu canviar a aquesta versió?',
                releasenotes: 'Notes de llançament',
                oldversionvalue: 'Valors de la versió anterior',
                customvalue: 'Valors personalitzats',
                newversionvalue: 'Valors de la nova versió',
                manualvalue: 'Valors manuals',
                applychanges: 'Aplicar els canvis',
                nochanges: 'No s&#39;han marcat canvis per aplicar',
                changecount: 'Esteu segur que voleu aplicar {{count}} canvis',
                applychangessuccesful: 'Els canvis s&#39;han aplicat correctamen',
            };
            caes.viewmanager = {
                properties: 'Propietats',
                fields: 'Camps',
                unsaved: 'Hi han canvis sense desar. Continuar?',
                add: 'Afegir',
                errornofilter: 'Afegiu primer una vista nova.',
                errornofields: 'En primer lloc, afegiu alguns camps',
                errornosql: 'El camp SQL no pot estar en blanc.',
                validate: 'Validar',
                errorduplicateprop: 'El camp {0} ja existeix',
            };
            caes.templates = {
                addnewtemplate: 'Afegeix una plantilla nova',
            };
            caes.flxscheduler = {
                objects: 'Objectes',
                chooseobjects: 'Trieu un Objecte',
            };
            caes.flxscheduleryear = {
                january: 'Gener',
                february: 'Febrer',
                march: 'Març',
                april: 'Abril',
                may: 'Maig',
                june: 'Juny',
                july: 'Juliol',
                august: 'Agost',
                september: 'Setembre',
                october: 'Octubre',
                november: 'Novembre',
                december: 'Decembre',
                mn: 'Dl.',
                tu: 'Dt.',
                we: 'Dc.',
                th: 'Dj.',
                fr: 'Dv.',
                sa: 'Ds.',
                su: 'Dg',
            };
            caes.flxsearch = {
                search: 'Cercar...',
                pleasewrite: 'Escriviu el text per cercar',
                speak: 'Parla ara...',
            };
            caes.text = {
                map: 'Feu clic al mapa',
                errormap: 'No s&#39;ha trobat l’adreça',
                api: 'No s&#39;ha trobat la Google API Key.',
                apihelp: 'Vegeu la nostra ajuda per saber com aconseguir-ho.',
            };
            caes.flxfunnel = {
                data: 'No hi ha informació',
            };
            caes.flxtimeline = {
                withoutDescription: 'Sense descripció',
                withoutRegisters: 'Sense registres',
                hour: 'Hores',
                today: 'Avui',
                day: 'Dia',
                week: 'Setmana',
                month: 'Mes',
                year: 'Curs',
                navigation: 'Navegació',
                range: 'Interval',
                title: 'AJUDA I CORTS ',
                description: 'Descripció',
                action: 'Acció',
                selectitem: 'Select item',
                multiselectitems: 'Seleccioneu diversos elements',
                multiselectbyrange: 'Seleccioneu diversos elements per interval de temps',
                multiselectbyrangegroup: 'Seleccioneu diversos elements per interval de temps en un grup',
                createitem: 'Crea un element ',
                createitemwithrange: 'Crear un element amb rang',
                edititem: 'Edita l&#39;element',
                openeditview: 'Obre la vista d&#39edició',
                zoom: 'Canvieu l&#39;interval de temps',
                navigationtime: 'Navegació a temps',
                or: 'o bé',
                to: 'a',
                withoutpercentage: 'Sense percentatge',
                notsupported: 'La mida de la pantalla no és compatible',
            };
            caes.flxfilebrowser = {
                saved: 'Desada',
                errorsaving: "Error en desar",
                errorremoving: "Error al esborar",
                permissionerror: "Ho sentim, no té permisos",
                documentempty: "Document buit",
                itemsselected: "Articles seleccionats",
                emptyfolder: "La carpeta està buida",
                existingfiles: "Hi ha alguns arxius al servidor",
                overwritefiles: "Esteu segur que voleu sobreescriure?",
                deleting: "Esborrant",
                items: "Articles",
                sure: "Estàs segur?",
                currentfolder: "Carpeta actual",
                uploadfiles: 'Pujar fitxers',
                addfolder: 'Afegir carpeta',
                download: 'Descarregar',
                delete: 'Esborrar',
                goback: 'Tornar',
                processingdownload: 'Processament descarrega',
            };
            caes.chatter = {
                composerplaceholder: 'Escriu alguna cosa',
                sendbutton: 'Registrar',
                startinfo: 'Primer ha de configurar el chatter',
            };
            caes.offline = {
                createobjecttitle: 'Afegeix un nou objecte a l\'App',
                createobjectcontent: 'Pots crear un objecte nou o basar-se en un d\'existent',
                createobjectbuttonnew: 'Nou objecte',
                createobjectbuttonbased: 'Basat en objecte',
                enablewebapiconfirmation: 'Per utilitzar l’aplicació offline, cal activar el WebApi i reiniciar l’aplicació.Voleu reiniciar l\'aplicació ara?',
            };
            caes.offlineemulator = {
                ios: 'Commuta el mode iOS',
                md: 'Commuta el mode Android',
            };
        })(caes = culture.caes || (culture.caes = {}));
    })(culture = flexygo.culture || (flexygo.culture = {}));
})(flexygo || (flexygo = {}));
//# sourceMappingURL=language-caes.js.map