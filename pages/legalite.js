import Header from '../components/Header';

const Legalite = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <section className="section hero container">
        <div className="columns is-vcentered">
          <div className="column has-text-left">
            <h1 className="title has-text-centered is-size-1 is-size-3-mobile">
              Cahier de légalité KeyServices
            </h1>
            <h2 id="ml" className="subtitle is-size-2 is-size-4-mobile mt-6">
              Mentions légales
            </h2>
            <p className="is-size-5 is-size-6-mobile">
              L’Application, Le Site et les Services sont exploités par la
              société KeyServices par actions simplifiée au capital de 91 177 €.
              <br />
              Immatriculée sous le numéro 225 513 445 RCS PARIS B, dont le siège
              siège se trouve 138 Boulevard Diderot, 75012 Paris.
              <br />
              Téléphone :&nbsp;
              <a href="+330000000000">00 00 00 00 00</a>
              <br />
              Email :&nbsp;
              <a href="mailto:keyservices.contact@keyservices.com">
                keyservices.contact@keyservices.com
              </a>
              <br />
              Représentant légal de la société : Monsieur Albert Dubuisson
              <br />
              Le Site est hébergé par : Heroku
              <br />
              Le Site internet a fait l’objet d’une déclaration auprès de la
              CNIL sous le numéro 00000050v0
            </p>
            <h2 id="cgu" className="subtitle is-size-2 is-size-4-mobile mt-6">
              Conditions générales d&apos;utilisation
            </h2>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              1. Objet
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              La société keyservices exploite une plateforme en ligne accessible
              à l’adresse www.keyservices.com ou via un application mobile
              compatible avec iOS ou Android (ci-après ensemble et
              indifféremment la « Plateforme »), à travers laquelle elle propose
              à des propriétaires de biens immobiliers et des locataires
              locataires autorisés (ci-après les « Bailleurs ») un outil leur
              permettant de mettre en location leur bien immobilier (ci-après le
              « Bien ») en location sur des sites partenaires de location et de
              de logements de particuliers (ci-après les « Sites Partenaires »)
              et de bénéficier de prestations de conciergerie et de logistiques
              (ci-après les « Services »).
              <br />
              keyservices et les Bailleurs sont ci-après désignés ensemble ou
              individuellement une « Partie »
              <br />
              Les présentes conditions générales (ci-après les « Conditions
              Générales ») ont pour objet de fixer les modalités et conditions
              par lesquelles keyservices fournis aux Bailleurs les services
              décrits ci-dessous (ci-après les « Services »), ainsi que de
              définir les droits et obligations des Parties dans ce cadre
              <br />
              Elles expriment l’intégralité de l’accord des Parties et annulent
              et remplacent tout accord, lettre, offre ou autre document écrit
              ou oral antérieur ayant le même objet.
              <br />
              Elles sont accessibles et imprimables à tout moment par un lien
              direct en page d’accueil de la Plateforme.
              <br />
              Ces Conditions Générales sont complétées par le mandat de gestion
              signé par le Bailleur et qui lui est transmis par keyservices lors
              de son inscription (ci-après, le « Mandat «). Selon la nature du
              mis à disposition par le Bailleur sur la Plateforme, keyservices
              génère et transmet au Bailleur l’un des Mandats spécifiques
              suivants :
              <br />
              Un Mandat de gestion de location courte durée;
              <br />
              Un mandat de gestion de location saisonnière;
              <br />
              Un Mandat de gestion de location « bail mobilité »;
              <br />
              Un mandat de gestion de location « bail commercial »
              <br />
              Les présentes Conditions Générales peuvent également être
              complétées, le cas échéant, par des conditions d’utilisation
              particulières. En cas de contradiction entre plusieurs documents,
              le document le document le document de rang supérieur prévaut,
              dans l’ordre de décroissant suivant :
              <br />
              Le Mandat
              <br />
              Les conditions particulières
              <br />
              Les présentes Conditions générales
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              2. Exploitant de la Plateforme
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              La Plateforme et les Services sont exploités par la société
              keyservices, société par actions simplifiée, inscrite au Registre
              du commerce et des sociétés de Paris sous le numéro 225 513 445,
              dont le siège social est situé 6 rue de Calais - 75009 Paris
              (ci-après « keyservices »). A ce titre, le Bailleur lui confie la
              gestion du Bien pour sa location, dans les conditions décrites au
              Mandat transmis par keyservices.
              <br />
              Téléphone :&nbsp;
              <a href="+330000000000">00 00 00 00 00</a>
              <br />
              Email :&nbsp;
              <a href="mailto:keyservices.contact@keyservices.com">
                keyservices.contact@keyservices.com
              </a>
              <br />
              Adresse de correspondance : 138 Boulevard Diderot 75012 Paris
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              3. Acceptation des Conditions Générales
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur déclare, en s’inscrivant aux Services dans les
              conditions prévues ci-après à l’article « Accès à la Plateforme et
              aux Services », avoir pris connaissance des présentes Conditions
              Générales et les accepter expressément.
              <br />
              Cette acceptation, qui est matérialisée par une case à cocher dans
              le formulaire d’inscription, ne peut être que pleine et entière,
              sans modification de quelque nature que ce soit. Toute adhésion
              réserve est considérée comme nulle et non avenue. Le Bailleur qui
              n’accepte pas d’être lié par les présentes Conditions Générales ne
              doit pas utiliser les Services, ni accéder à la Plateforme.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              4. Accès à la Plateforme et aux Services
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              La Plateforme et les Services sont accessibles :
              <br />
              à toute personne physique disposant de la pleine capacité
              juridique pour s’engager au titre des présentes Conditions
              Générales et âgée d’au moins dix-huit (18) ans. Le Bailleur qui ne
              de la pleine capacité juridique doit obtenir l’accord de son
              représentant légal avant d’accéder à la Plateforme et aux
              Services, ce qu’il reconnaît et accepte. à toute personne morale
              agissant par l’intermédiaire d’une personne physique disposant de
              capacité juridique pour contracter au nom et pour le compte de la
              personne morale.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              5. Inscription
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Tout Bailleur est tenu d’ouvrir un compte auprès de keyservices
              selon la procédure décrite ci-dessous pour bénéficier des Services
              (ci-après le « Compte »). Pour ce faire, le Bailleur est tenu de :
              <br />
              remplir un formulaire d’inscription, en y complétant toutes les
              informations requises, notamment ses nom, prénom et son adresse
              email ; choisir un mot de passe. Le Bailleur a la possibilité de
              changer son mot de passe à tout moment. Il est recommandé de
              changer régulièrement de mot de passe. Le Bailleur reconnaît et
              l’adresse email renseignée sur le formulaire d’inscription
              constitue son identifiant de connexion ; cocher sur le formulaire
              d’inscription la case « J’ai lu et j’accepte les conditions
              générales d’utilisation » et la case « J’ai lu et j’accepte les
              conditions générales d’utilisation des Sites Partenaires ».
              renvoyer le Mandat signé. Le Bailleur doit fournir l’ensemble des
              informations marquées comme obligatoires, ce qu’il reconnait et
              accepte.
              <br />
              L’inscription du Bailleur est automatiquement validée et entraîne
              l’ouverture d’un Compte personnel. keyservices se réserve
              cependant le droit, à sa libre discrétion, et à tout moment après
              l’inscription, de mettre en œuvre tout processus de vérification
              qu’elle jugera utile, portant notamment sur l’email du Bailleur,
              Bailleur, son numéro de téléphone, son identité et/ou ses
              coordonnées, ainsi que, le cas échéant, sur le numéro
              d’enregistrement de son Bien. keyservices se réserve la
              possibilité de prendre toutes mesures appropriées selon les
              conditions et modalités détaillées à l’article « Sanction des
              manquements » ciaprès.
              <br />
              Tout Bailleur garantit à la Société que les informations
              renseignées sur le formulaire d’inscription sont exactes et
              qu’elles ne sont entachées d’aucun caractère trompeur. Le Bailleur
              s’engage notamment à fournir une adresse email valide. Le Bailleur
              s’engage à informer keyservices sans délai de tout changement dans
              lesdites informations à l’adresse de contact indiquée à l’article
              « Exploitant de la Plateforme » des présentes.
              <br />
              Le Bailleur reconnaît et accepte que les informations saisies aux
              fins de création ou de mise à jour de son Compte valent preuve de
              son identité
              <br />
              L’inscription sur la Plateforme entraîne automatiquement
              l’attribution d’un espace personnel sous une forme et selon les
              moyens techniques qu’keyservices juge les plus appropriés pour
              rendre les Services, consistant notamment en une page web
              permettant au Bailleur d’utiliser et de gérer les Services
              (ciaprès « l’Espace personnel »).
              <br />
              Le Bailleur accède aux Services en se connectant à son Compte avec
              son adresse email et le mot de passe choisit lors de
              l’inscription.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              6. Usage strictement personnel
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur s’engage à utiliser personnellement les Services et à
              ne permettre à aucun tiers de les utiliser à sa place ou pour son
              compte, sauf à en supporter l’entière responsabilité.
              <br />
              Le Bailleur s’engage à veiller au maintien de la confidentialité
              de son identifiant et de son mot de passe. Toute utilisation
              effectuée avec l’identifiant et le mot de passe du Bailleur sera
              réputée être effectuée par celui-ci, le Bailleur en restant dès
              lors seul responsable.
              <br />
              Le Bailleur doit immédiatement contacter keyservices aux
              coordonnées mentionnées à l’article « Exploitant de la Plateforme
              » s’il remarque que son Compte a été utilisé à son insu. Il
              reconnaît à keyservices le droit de prendre toutes mesures
              appropriées en pareil cas.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              7. Usage non commercial
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur s’interdit de monnayer, vendre, concéder, échanger et
              plus généralement, négocier tout ou partie de l’accès aux
              Services, aux serveurs de la Plateforme, ainsi qu’aux informations
              et/ou textes, images, et autres contenus exploités par keyservices
              sur la Plateforme, et/ou mis en ligne par les Bailleurs dans le
              cadre de l’utilisation des Services.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              8. Durée
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Les Services sont souscrits pendant la durée mentionnée au Mandat
              signé par le Bailleur lors de son inscription.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              9. Description des Services
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur a accès aux Services qui suivent, sous une forme et
              selon les moyens techniques que keyservices juge les plus
              appropriés.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              9.1. Rédaction d’une annonce
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur s’engage à remplir de manière exhaustive le formulaire
              d’informations mis à sa disposition par keyservices.
              <br />
              Le Bailleur doit renseigner toutes les informations marquées comme
              obligatoires. Le Bailleur reconnaît et accepte que keyservices se
              réserve la possibilité de venir visiter le Bien préalablement à la
              publication d’une annonce. Le Bailleur s’engage à donner l’accès à
              son Bien sur simple demande d’keyservices.
              <br />
              Dans ce cadre, le Bailleur garantit à keyservices de la
              disponibilité du Bien sur les périodes de disponibilités
              renseignées sur la fiche d’informations, et notamment qu’il est
              intégralement inoccupé sur ces périodes et en état d’être loué
              (pas de travaux en cours, de pièces condamnées, de dégâts des eaux
              ou en tout genre, d’appareils qui ne seraient pas en état de
              marche, de fenêtres brisées, etc.).
              <br />
              keyservices s’engage à rédiger une annonce sur la base de ces
              informations et détermine seule le prix de la location du Bien à
              la nuit, en fonction du prix du marché.
              <br />
              En outre, keyservices insère des photographies du Bien, qu’elle
              choisit librement et dont elle détermine seule le nombre.
              <br />
              Le Bailleur s’engage à se rendre disponible pour la prise de
              photographie de son Bien. Il reconnaît être informé qu’il sera
              contacté directement par un photographe mandaté par keyservices,
              aux fins de déterminer les modalités de réalisation de la
              prestation et notamment fixer les date et heure de rendez-vous
              pour réaliser la séance photo du Bien.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              9.2. Publication de l’annonce
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices s’engage à publier l’annonce sur un ou plusieurs Sites
              Partenaires. Le Bailleur reconnaît et accepte que keyservices
              détermine seule les Sites Partenaires sur lesquels elle publie
              l’annonce.
              <br />
              La publication de l’annonce est valable, sauf mention contraire,
              pendant toute la durée de l’utilisation des Services par le
              Bailleur, sous réserve de la disponibilité du Bien.
              <br />
              Le Bailleur est informé et accepte que toute annonce non validée
              ou pour laquelle le Bailleur n’a pas rempli en intégralité le
              formulaire d’informations ne sera pas publiée.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              9.3. Gestion de la location du Bien
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices lui propose diverses prestations relatives à la
              gestion de la location de son Bien, dont les modalités sont
              décrites dans le Mandat signé par le Bailleur lors de son
              inscription, et notamment
              <br />
              La gestion des réservations du Bien via les Sites Partenaires.
              keyservices s’engage à notifier au Bailleur, dans son Espace
              personnel, les réservations confirmées de son Bien, ainsi que les
              informations y afférentes. Le Bailleur peut accéder à travers son
              Compte à l’historique des réservations passées ;
              <br />
              La remise des clefs au locataire. keyservices indiquera au
              Bailleur les modalités de remise des clefs, que le Bailleur
              s’engage à respecter, sauf impossibilité ;
              <br />
              La réalisation de l’état des lieux général d’entrée et de sortie
              de chaque locataire. Le dit état des lieux se limite à la
              vérification du bon état général du Bien, et notamment keyservices
              vérifie que le Bien n’a subi aucun dommage conséquent et visible.
              Le cas échéant, keyservices informe le Bailleur des dégradations
              éventuelles constatées ;
              <br />
              keyservices assure l’entretien du Bien pour le compte du Bailleur
              pendant toute la durée de la location effective du Bien ;
              <br />
              keyservices effectue les prestations de ménage entre chaque
              période de location d’un Bien, ainsi que le nettoyage du linge de
              toilette et de maison. Le Bailleur reconnaît et accepte que
              keyservices reste libre de sous-traiter les dites prestations de
              ménage à tout prestataire de son choix. Le Bailleur reconnaît et
              accepte que les services de gestion sont fournis soit directement
              par keyservices soit par tout prestataire de son choix.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              9.4. Perception des loyers
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices est expressément mandatée aux termes des présentes par
              le Bailleur pour percevoir les loyers auprès des Sites Partenaires
              ou des locataires directement.
              <br />
              keyservices collecte également les dépôts de garantie éventuels.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              10. Conditions financières
            </h3>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              10.1. Montant des loyers
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le montant des loyers est déterminé librement et unilatéralement
              par keyservices.
              <br />
              Le prix applicable est celui affiché sur l’Annonce.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              10.2. Rémunération du Bailleur
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur est rémunéré par un partage de revenus avec
              keyservices
              <br />
              <br />
              10.2.1. Partage de revenus
              <br />
              Le Bailleur touche les loyers perçus par keyservices au titre de
              la location du Bien pour la période considérée, après déduction de
              la commission d’keyservices, calculée selon les modalités prévues
              à l’article « Commission d’keyservices ».
              <br />
              Les modalités de versement de la part revenant au Bailleur sont
              prévues dans le Mandat.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              10.3. Commission de keyservices
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              En contrepartie des Services, keyservices perçoit une commission
              calculée comme suit :
              <br />
              La commission de keyservicescorrespond à un pourcentage des loyers
              effectivement perçus par keyservices au titre de la location du
              Bien pour la période considérée. Le taux applicable à ce
              pourcentage varie en fonction de la période de mise à disposition
              consécutive du Bien. Il est indiqué sur la Plateforme et/ou dans
              le Mandat.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              11. Garantie de niveau de services
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices fera ses meilleurs efforts pour que le Compte
              fonctionne sans interruption 24 heures sur 24 heures et 7 jours
              sur 7 jours, sauf en cas de force majeure.
              <br />
              En cas de nécessité, keyservices se réserve la possibilité de
              limiter ou de suspendre l’accès à la Plateforme, pour procéder à
              toute opération de maintenance et/ou d’amélioration. Dans cette
              hypothèse, keyservices s’engage à faire ses meilleurs efforts pour
              informer à l’avance par message informatif général sur la page
              d’accueil de la Plateforme de ces opérations de maintenance et/ou
              d’amélioration
              <br />
              Dans le cadre de ces opérations de maintenance et/ou d’évolution,
              keyservices s’engage à faire ses meilleurs efforts pour effectuer
              les sauvegardes du Compte et/ou des contenus qu’il héberge, afin
              de permettre sa restauration en l’état, à la date des opérations
              de maintenance et/ou d’évolution
              <br />
              La responsabilité de keyservices ne saurait en aucun cas être
              engagée en cas de perte de contenus au cours des opérations de
              maintenance et/ou d’évolution.
              <br />
              keyservices s’engage également à prendre toutes précautions
              utiles, au regard de la nature des données et des risques
              présentés par les traitements automatisés de données mis en œuvre
              pour les besoins des Services, pour préserver la sécurité des
              données, et notamment empêcher qu’elles soient déformées,
              endommagées ou que des tiers non autorisés y aient accès.
              <br />
              En outre, eu égard à la complexité d’internet, l’inégalité des
              capacités des différents sous-réseaux, l’afflux à certaines
              heures, aux différents goulots d’étranglement sur lesquels
              keyservices n’a aucune maîtrise, la responsabilité de cette
              dernière sera limitée au fonctionnement de ses serveurs, dont les
              limites extérieures sont constituées par les points de
              raccordement.
              <br />
              keyservices ne saurait être tenue pour responsable (i) des
              vitesses d’accès à ses serveurs, (ii) des ralentissements externes
              à ses serveurs, et (iii) des mauvaises transmissions dues à une
              défaillance ou à un dysfonctionnement de ces réseaux.
              <br />
              Le Bailleur reconnaît et accepte que la présente garantie de
              niveau de services ne couvre pas toute panne ou interruption des
              Services intervenant du fait des opérateurs télécoms ou
              fournisseurs d’accès à internet et au web mobile.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              12. Obligations du Bailleur
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur reconnait et accepte que les Services proposés par la
              Plateforme sont réservés à la location de Biens dans leur
              intégralité, à l’exclusion d’une location par pièces.
              <br />
              Le Bailleur s’engage à ne pas annuler une période de location du
              Bien dès qu’une réservation a été enregistrée par keyservices pour
              ladite période. S’il annule néanmoins la location pour ladite
              période, il reconnaît être informé que keyservices lui facturera
              des frais d’annulation dont le montant est indiqué sur la
              Plateforme.
              <br />
              Il reste libre d’annuler la disponibilité du Bien pour les jours
              pour lesquels aucune réservation n’est enregistrée par keyservices
              à la date de l’annulation.
              <br />
              Le Bailleur reconnaît et accepte qu’en cas d’annulation de tout ou
              partie d’une période de disponibilité, le revenu garanti sera
              recalculé au prorata du nombre de jours de disponibilité du Bien.
              La différence entre le revenu déjà versé à la date de l’annulation
              pour la période de disponibilité concernée et le revenu garanti
              recalculé sera refacturé au Bailleur, soit par compensation avec
              la période de disponibilité suivante, si le montant de revenu est
              suffisant pour opérer la compensation, soit par émission d’une
              facture de remboursement du montant dû. Dans cette hypothèse, le
              paiement du prix sera dû immédiatement.
              <br />
              Dans l’hypothèse où le Bailleur n’honorerait pas les réservations
              et les annulerait en violation des dispositions ci-dessus et/ou ne
              s’acquitterait pas de toute facture de remboursement dû, ce
              dernier devra indemniser keyservices de tous frais et charges
              subis en lien avec cette annulation et notamment les surcoûts liés
              au relogement des locataires.
              <br />
              Le Bailleur garantit à keyservices qu’il dispose de toutes les
              autorisations nécessaires et de toute capacité pour mettre en
              location ou sous-location son Bien pendant toute la durée pendant
              laquelle il utilise les Services.
              <br />
              Dans ce cadre, il garantit notamment à keyservices que :
              <br />
              la location ou la sous-location du Bien via la Plateforme est
              conforme au règlement de copropriété de l’immeuble dans lequel il
              se trouve ;
              <br />
              aucune disposition légale ou réglementaire, ni aucun arrêté
              municipal ne limite sa capacité à louer son Bien.
              <br />
              Avoir procédé aux éventuelles déclarations imposées par les lois
              et règlements et avoir recueilli toutes les autorisations
              nécessaires pour s’engager dans le cadre des présentes. En
              particulier, le Bailleur garantit :
              <br />
              Pour la location courte durée de sa résidence principale ou
              secondaire
              <br />
              Avoir effectué la déclaration de son Bien, et avoir obtenu son
              numéro d’enregistrement auprès des services de sa mairie lorsque
              cela est nécessaire dans sa ville;
              <br />
              Lorsque ce Bien est sa résidence principale : ne pas louer ce Bien
              plus de 120 (cent-vingt) jours par an (ou le nombre de jours de
              location autorisé par an par la loi), sauf à avoir obtenu une
              dérogation expresse autorisant le dépassement de ce plafond ;
              <br />
              Lorsque ce Bien est sa résidence secondaire : obtenir les
              autorisations de changement d’usage auprès de services de sa
              mairie, le cas échéant.
              <br />
              Pour la location d’un local commercial
              <br />
              Dans l’hypothèse où le Bien est exploité en application d’un bail
              commercial, le Bailleur garantit que ledit bail autorise
              l’hébergement temporaire dans les activités exercées ; Le Bailleur
              est seul responsable de s’assurer que l’activité qu’il est
              autorisé à exercer en vertu du bail commercial conclu lui permet
              de mettre son Bien en location dans le cadre des présentes
              Conditions Générales.
              <br />
              Pour toutes les locations:
              <br />
              keyservices ne peut être reconnue pour responsable en cas de
              non-respect par le Bailleur de ses obligations liées à la
              réglementation applicable à la location de son Bien et des
              caractéristiques spécifiques inhérentes à la nature du bail
              considéré, ainsi qu’en cas du non-respect de cette réglementation
              par les Sites Partenaires. En conséquence, il incombe au Bailleur
              de se tenir informé sur la réglementation liée à la location de
              son Bien et de respecter les obligations spécifiques
              éventuellement applicables dans la zone géographique de location
              dudit Bien et d’effectuer le cas échéant toute formalité requise
              pour permettre une utilisation du Bien à des fins de location ;
              son Bien ne fait l’objet d’aucune procédure de saisie immobilière.
              <br />
              Dans l’hypothèse où l’une de ces déclarations serait remise en
              cause, le Bailleur s’engage à en informer immédiatement
              keyservices par email, laquelle se réserve le droit de mettre fin
              aux présentes et au Mandant dans les conditions de l’article «
              Sanction des manquements » et décrites au Mandat.
              <br />
              Afin de permettre à keyservices d’assurer la mise en œuvre des
              Services auprès des locataires, le Bailleur s’engage à :
              <br />
              fournir à keyservices l’ensemble des informations et du matériel
              nécessaires à l’accès au Bien (clefs, badges, etc.) et, plus
              généralement, tout document, élément, donnée et toute information
              qui lui est demandé par keyservices et nécessaires à la bonne
              exécution des Services ;
              <br />
              coopérer activement avec keyservices en vue de la bonne exécution
              des présentes et à l’informer de toutes difficultés liées à cette
              exécution.
              <br />
              ne pas entraver, d’une quelque manière que ce soit les prestations
              de services rendues par keyservices aux locataires ;
              <br />
              répondre, dans un délai raisonnable, à toute demande formulée par
              keyservices ;
              <br />
              ne pas communiquer les coordonnées des locataires communiqués par
              keyservices via la Plateforme.
              <br />
              rendre le Bien accessible à keyservices, aux locataires, ainsi
              qu’à ses prestataires. Le Bailleur s’engage en outre à respecter
              les obligations qui suivent :
              <br />
              Le Bailleur s’engage, dans son usage des Services, à respecter les
              lois et règlements en vigueur et à ne pas porter atteinte aux
              droits de tiers ou à l’ordre public.
              <br />
              Il est en outre seul responsable du bon accomplissement de toutes
              les formalités notamment administratives, fiscales et/ ou sociales
              et de tous les paiements de cotisations, taxes ou impôts de toutes
              natures qui lui incombent le cas échéant en relation avec son
              utilisation des Services, et notamment au titre de la perception
              des revenus qu’il perçoit au titre des présentes. Le cas échéant,
              il est seul responsable d’avoir le statut nécessaire pour exercer
              une activité commerciale.
              <br />
              Par ailleurs, conformément aux dispositions de l’article 87 de la
              loi de finance pour 2016, le Bailleur est informé que keyservices
              communiquera à tout Bailleur résidant en France, par email à
              l’adresse renseignée lors de l’inscription, en janvier de chaque
              année, un courrier sur les revenus générés par ses activités sur
              la Plateforme. Ce document récapitulera le montant brut des
              transactions dont keyservices aura connaissance et qui auraient
              été perçues par le Bailleur durant l’année précédente.
              <br />
              Afin de connaître les obligations qui lui incombent en fonction de
              sa situation propre, le Bailleur est invité à consulter les sites
              et fiches pratiques mis en ligne par le Trésor Public et la
              Sécurité Sociale et accessibles aux liens ci-dessous :
              <br />
              Obligations fiscales
              (https://www.impots.gouv.fr/portail/node/10841)
              <br />
              Obligations sociales
              (http://www.securite-sociale.fr/Vos-droits-et-demarches-dans-le-cadre-desactivites-economiques-entre-particuliers-Article-87).
              <br />
              Le Bailleur reconnaît avoir pris connaissance des caractéristiques
              et contraintes, notamment techniques, de l’ensemble des Services.
              <br />
              Le Bailleur garantit à keyservices qu’il dispose de tous les
              droits et autorisations nécessaire à la diffusion des contenus de
              toute nature (rédactionnels, graphiques, audios, audiovisuels ou
              autres) sur la Plateforme dans le cadre de l’utilisation des
              Services (ci-après les « Contenus »). Il s’engage à ce que ces
              Contenus soient licites, ne portent pas atteinte à l’ordre public,
              aux bonnes mœurs ou aux droits de tiers, n’enfreignent aucune
              disposition législative ou règlementaire et plus généralement, ne
              soient aucunement susceptibles de mettre en jeu la responsabilité
              civile ou pénale de keyservices. Le Bailleur s’interdit ainsi de
              diffuser, notamment et sans que cette liste soit exhaustive :
              <br />
              des contenus pornographiques, obscènes, indécents, choquants ou
              inadaptés à un public familial, diffamatoires, injurieux,
              violents, racistes, xénophobes ou révisionnistes ;
              <br />
              des contenus contrefaisants ;
              <br />
              des contenus attentatoires à l’image d’un tiers ;
              <br />
              des contenus mensongers, trompeurs ou proposant ou promouvant des
              activités illicites, frauduleuses ou trompeuses ;
              <br />
              des contenus nuisibles aux systèmes informatiques de tiers (tels
              que virus, vers, chevaux de Troie, etc) ;
              <br />
              et plus généralement tout contenu susceptible de porter atteinte
              aux droits de tiers ou d’être préjudiciable à des tiers, de
              quelque manière et sous quelque forme que ce soit.
              <br />
              Dans ce cadre, le Bailleur garantit keyservices contre toute
              plainte, revendication et/ou action d’un ou plusieurs autres
              Bailleurs et/ou de tout tiers soutenant que les Contenus
              constitueraient une violation de ses droits, quels qu’ils soient
              et notamment ses droits de propriété intellectuelle, droit à
              l’image et à la protection de la vie privée. En conséquence, le
              Bailleur s’engage à indemniser keyservices de tout préjudice
              qu’elle subirait et à prendre à sa charge tous les
              dommages-intérêts, ainsi que les frais, charges et dépens auxquels
              keyservices pourrait être condamnée, ou qui seraient prévus par un
              accord transactionnel signé par keyservices en lien avec la
              violation par le Bailleur de ses obligations et garanties
              ci-dessus.
              <br />
              Les Bailleurs garantissent de manière générale keyservices contre
              toutes plaintes, réclamations, actions et/ou revendications
              quelconques que keyservices pourrait subir du fait de la
              violation, par les Bailleurs de l’une quelconque de leurs
              obligations ou garanties aux termes des présentes Conditions
              Générales
              <br />
              Ils s’engagent à indemniser keyservices de tout préjudice qu’elle
              subirait et à lui payer tous les frais, charges et/ou
              condamnations qu’elle pourrait avoir à supporter de ce fait
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              13. Comportements prohibés
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Il est strictement interdit d’utiliser les Services aux fins
              suivantes :
              <br />
              l’exercice d’activités illégales, frauduleuses ou portant atteinte
              aux droits ou à la sécurité des tiers, l’atteinte à l’ordre public
              ou la violation des lois et règlements en vigueur,
              <br />
              l’intrusion dans le système informatique d’un tiers ou toute
              activité de nature à nuire, contrôler, interférer, ou intercepter
              tout ou partie du système informatique d’un tiers, en violer
              l’intégrité ou la sécurité,
              <br />
              l’aide ou l’incitation, sous quelque forme et de quelque manière
              que ce soit, à un ou plusieurs des actes et activités décrits
              ci-dessus,
              <br />
              et plus généralement toute pratique détournant les Services à des
              fins autres que celles pour lesquelles ils ont été conçus.
              <br />
              Il est strictement interdit à tout Bailleur de copier et/ou de
              détourner, à ses fins ou à celles de tiers, le concept, les
              technologies ou tout autre élément de la Plateforme.
              <br />
              Sont également strictement interdits : (i) tous comportements de
              nature à interrompre, suspendre, ralentir ou empêcher la
              continuité des Services, (ii) toutes intrusions ou tentatives
              d’intrusions dans les systèmes de keyservices, (iii) tous
              détournements des ressources système de la Plateforme, (iv) toutes
              actions de nature à imposer une charge disproportionnée sur les
              infrastructures de cette dernière, (v) toutes atteintes aux
              mesures de sécurité et d’authentification, (vi) tous actes de
              nature à porter atteinte aux droits et intérêts financiers,
              commerciaux ou moraux de keyservices, et enfin plus généralement
              (vii) tout manquement aux présentes Conditions Générales.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              14. Sanction des manquements
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Sans préjudice des dispositions de l’article « Résiliation pour
              manquement » en cas de manquement à l’une quelconque des
              dispositions des présentes Conditions Générales, ou plus
              généralement, d’infraction aux lois et règlements par le Bailleur,
              keyservices se réserve le droit de :
              <br />
              suspendre, sans délai, l’accès aux Services du Bailleur auteur du
              manquement ou de l’infraction, ou y ayant participé, et notamment,
              en cas de fourniture d’informations erronées, incomplètes,
              mensongères ou périmées lors de l’inscription,
              <br />
              supprimer tout contenu en lien avec le manquement ou l’infraction
              considéré(e), en totalité ou en partie,
              <br />
              prendre toutes mesures appropriées et engager toute action en
              justice,
              <br />
              avertir le cas échéant les autorités compétentes, coopérer avec
              elles et leur fournir toutes les informations utiles à la
              recherche et à la répression d’activités illégales ou illicites.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              15. Exclusion de responsabilité et garantie de keyservices
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices s’engage à faire ses meilleurs efforts pour fournir
              les Services avec diligence et selon les règles de l’art, étant
              précisé qu’il pèse sur elle une obligation de moyens, à
              l’exclusion de toute obligation de résultat, ce que le Bailleur
              reconnaît et accepte expressément.
              <br />
              Sa responsabilité est exclusivement limitée à la fourniture des
              Services selon les modalités décrites aux présentes, à l’exclusion
              de toute autre prestation. Le Bailleur reconnaît et accepte en
              outre que les Services sont fournis tel quel sans aucune garantie
              d’aucune sorte, expresse ou implicite.
              <br />
              keyservices ne garantit pas que :
              <br />
              les Services, soumis à une recherche constante pour en améliorer
              notamment la performance et le progrès, seront totalement exempts
              d’erreurs, de vices ou défauts ;
              <br />
              les Services étant standards et nullement proposés à la seule
              intention du Bailleur en fonction de ses propres contraintes
              personnelles, répondront spécifiquement aux besoins et attentes du
              Bailleur ;
              <br />
              la Plateforme fonctionnera de manière ininterrompue, keyservices
              se réservant la faculté d’interrompre momentanément l’accès à la
              Plateforme pour des raisons de maintenance dans les conditions de
              l’article « Garantie de niveau de service », et ne pouvant en
              aucun cas être tenue responsable des perturbations ou défaillances
              du réseau internet ou du réseau de télécommunication, et plus
              généralement qui auraient leur origine dans des circonstances qui
              lui sont extérieures ou découlant de la force majeure.
              <br />
              keyservices décline également toute responsabilité en cas de perte
              éventuelle des informations accessibles sur le Compte du Bailleur,
              le Bailleur devant s’assurer de sauvegarder une copie des
              informations qu’il juge nécessaires et ne pouvant prétendre à
              aucun dédommagement à ce titre.
              <br />
              Le Bailleur est informé et accepte que la location d’un Bien, tel
              qu’elle est proposée sur la Plateforme peut accélérer l’état
              d’usure du Bien. La responsabilité de keyservices ne pourra en
              aucun cas être engagée pour tout dommage constaté sur le Bien, lié
              au non à l’usure du Bien, éventuellement accentuée par une
              utilisation du Bien dans le cadre de locations répétées.
              <br />
              Le Bailleur reconnaît et accepte également que la responsabilité
              de keyservices ne saurait en aucun cas être engagée en cas de vol
              ou de casse par un locataire. Le Bailleur peut néanmoins faire une
              déclaration de plainte auprès de keyservices dans les conditions
              de l’article « Plainte ». Cette dernière pourra, à sa libre
              convenance, fournir une aide au Bailleur dans l’accomplissement de
              ses démarches auprès de l’assurance et/ou des forces de police,
              notamment elle s’engage à lui communiquer tout élément en sa
              possession relatif au fait générateur du dommage.
              <br />
              Le Bailleur s’engage à ne pas conserver dans le Bien, pendant une
              période de location, de biens de valeur, tels que des bijoux ou
              des œuvres d’art ou à le conserver dans un coffre-fort sécurisé.
              Le Bailleur reconnaît que la responsabilité de keyservices ne
              pourra en aucun cas être engagée en cas de vol ou de casse par un
              locataire, comme indiqué ci-dessus.
              <br />
              La responsabilité du fait de tout dommage résultant de la
              location, de tout vol ou détérioration, de tout problème d’hygiène
              et de salubrité constaté au sein du Bien devra être recherchée
              auprès des locataires. keyservices s’engage cependant à notifier
              au Bailleur l’existence de tout dommage, vol ou dégradation
              qu’elle constaterait au sein du Bien.
              <br />
              keyservices ne saurait en outre être responsable de toute
              annulation éventuelle d’une réservation par un locataire.
              <br />
              keyservices ne saurait en aucun cas être partie à quelques litiges
              éventuels que ce soit entre les Bailleurs et les locataires,
              concernant l’état du Bien ou l’intégrité de ses équipements, ou
              toutes autres garanties, déclarations ou obligations quelconques
              auxquelles les Bailleurs seraient tenus dans ce cadre.
              <br />
              Le Bailleur ne pourra en aucun cas se réclamer des dispositions
              des présentes pour revendiquer, en aucune manière, la qualité
              d’agent, de représentant ou d’employé de keyservices, ni engager
              celle-ci à l’égard de tiers, au-delà des Services prévus par les
              dispositions des présentes. Aux termes des présentes, il n’est pas
              formé de structure juridique particulière entre keyservices et les
              Bailleurs, chacun conservant leur entière autonomie et
              responsabilités.
              <br />
              Le Bailleur reconnaît que les Services lui offrent une solution
              supplémentaire, alternative, de mettre son Bien en location et que
              cette solution ne saurait se substituer aux autres moyens dont il
              peut disposer par ailleurs pour atteindre le même objectif.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              16. Plainte
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              En cas d’acte portant préjudice à un Bailleur commis par un autre
              Bailleur sur la Plateforme et/ou dans le cadre des Services, le
              Bailleur peut transmettre une plainte à keyservices ou au
              locataire par email ou par téléphone aux coordonnées renseignées à
              l’article « Identification », après avoir préalablement recherché
              une solution amiable.
              <br />
              La plainte doit impérativement comporter la date de sa
              notification, l’identité du plaignant (nom, prénom, profession,
              domicile, nationalité, date et lieu de naissance), l’identifiant
              du Bailleur à l’origine du préjudice, la description des faits
              litigieux accompagné le cas échéant d’un lien vers la page web
              permettant d’en rapporter la preuve, ainsi que la copie de la
              correspondance adressée à l’auteur de l’atteinte et recherchant
              une solution amiable.
              <br />
              keyservices aura la libre faculté de prendre toutes mesures
              appropriées, sans aucun engagement de sa part et/ou de transmettre
              cette plainte aux autorités compétentes.
              <br />
              Les Bailleurs feront leur affaire personnelle des actions qu’ils
              pourraient introduire devant toute juridiction contre un autre
              Bailleur ou un locataire en raison du préjudice subi de son fait.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17. Dénonciation / Résiliation
            </h3>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17.1. Désinscription du Bailleur
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur peut se désinscrire de la Plateforme à tout moment en
              adressant un e-mail à keyservices à l’adresse figurant à l’article
              « Exploitant de la Plateforme ».
              <br />
              La désinscription du Bailleur est effective à l’issue de la
              dernière réservation programmée au moment de la demande de
              désinscription. Ainsi, le Bailleur reconnait et accepte qu’il est
              tenu d’honorer toute réservation prise au moment de l’envoi de sa
              demande de désinscription.
              <br />
              Aucune réservation ne pourra être prise à compter de la demande de
              désinscription.
              <br />
              La désinscription entraîne la suppression automatique du Compte du
              Bailleur.
              <br />
              Dans l’hypothèse où le Bailleur n’honorerait pas les réservations
              dans les conditions stipulées cidessus, keyservices se réserve le
              droit de solliciter une indemnisation dans les conditions des
              présentes Conditions Générales et notamment de lui faire supporter
              les surcoûts liés au relogement des locataires, ce que le Bailleur
              reconnait et accepte.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17.2. Fin des services du fait de keyservices
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Sans préjudice des dispositions de l’article « Sanction des
              manquements », keyservices se réserve le droit de modifier ou
              d’arrêter de proposer tout ou partie des Services, à tout moment,
              à sa libre discrétion, dans le respect des réservations déjà
              prises à la date de modification des Services, ainsi que des
              conditions de résiliation précisées dans le Mandat du Bailleur.
              <br />
              Le Bailleur sera informé de ces modifications et/ou arrêts par
              tout moyen utile, avec un préavis d’au moins un (1) mois.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17.3. Résiliation pour manquement
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              En cas de manquement de l’une ou l’autre des Parties à l’une
              quelconque de ses obligations au titre des présentes Conditions
              Générales ou du Mandat, auquel il ne serait pas remédié dans un
              délai de trente (30) jours calendaires à compter de la réception
              d’une mise en demeure d’avoir à remédier audit manquement, la
              Partie en question pourra, de plein droit et sans formalités
              judiciaires, résilier les présentes Conditions Générales et/ou le
              Mandat.
              <br />
              Dans une telle situation, keyservices pourra fermer le Compte du
              Bailleur.
              <br />
              La résiliation sera effective à compter de la première
              présentation à la Partie défaillante d’une lettre recommandée avec
              accusé de réception notifiant la demande de résiliation, sans
              qu’il soit nécessaire de n’effectuer aucune autre formalité
              judiciaire ou extrajudiciaire.
              <br />
              La résiliation des présentes sera sans préjudice de tous
              dommages-intérêts auxquels la Partie en question pourrait
              prétendre du fait du manquement de l’autre Partie et de toute
              pénalité qui lui serait éventuellement due.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17.4. Articulation avec la durée du Mandat
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              En tout état de cause, toute désinscription ou résiliation des
              présentes Conditions Générales, pour quelque cause que ce soit,
              entraînera la résiliation automatique du Mandat et inversement, à
              la même date d’effet et donnera lieu à la fin des Services.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              17.5. Conséquences de la fin des Services
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              La fin des Services, pour quelque cause que ce soit, entraîne la
              suppression du Compte du Bailleur, qui n’a alors plus accès à son
              Espace Personnel. Le Bailleur fera son affaire de récupérer les
              données stockées sur son Espace Personnel avant la suppression
              effective de son Compte, sur le format de son choix, ce qu’il
              reconnaît et accepte.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              18. Propriété intellectuelle
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Les présentes Conditions Générales ne confèrent au Bailleur aucun
              droit de propriété intellectuelle d’aucune sorte sur la
              Plateforme, ainsi que sur l’ensemble des textes, images, contenus
              audio-visuels et autres contenus, exploités par keyservices sur la
              Plateforme, à l’exclusion des Contenus mis en ligne par le
              Bailleur en question, en ce compris les présentes Conditions
              Générales, les marques, noms commerciaux et logos, les logiciels,
              structures, infrastructures et bases de données utilisés par
              keyservices au sein de la Plateforme, qui demeurent la propriété
              exclusive, pleine et entière de keyservices.
              <br />
              Tout acte de désassemblage, décompilation, décryptage, extraction,
              réutilisation, et plus généralement toute reproduction,
              représentation, distribution, adaptation, commercialisation de la
              Plateforme et/ou des textes, images, contenus exploités par
              keyservices sur la Plateforme par le Bailleur, non conforme aux
              dispositions des présentes Conditions Générales, sont interdits et
              pourront faire l’objet de poursuites judiciaires.
              <br />
              Le Bailleur autorise expressément keyservices, pour toute la durée
              d’utilisation des Services, et pour le monde entier, à titre non
              exclusif, personnel et non transférable, à reproduire,
              représenter, adapter, modifier, transformer les Contenus publiés
              par le Bailleur sur la Plateforme, aux seules fins de l’exécution
              des Services par keyservices et de promotion de ceux-ci.
              keyservices s’interdit expressément toute autre utilisation des
              Contenus.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              18.1. Utilisation des cookies
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le site web de keyservices utilise des cookies. Lorsque vous
              accédez au site web de keyservices, vous serez informé, par le
              biais d’une bannière pop-up, de l’utilisation des cookies. Si vous
              consentez à l’utilisation de cookies, vous pouvez en informer
              keyservices et révoquer votre consentement à tout moment par email
              sur
              <a href="mailto:rgpd@keyservices.com">rgpd@keyservices.com</a>
              &nbsp;Les cookies sont des fichiers, contenant souvent un
              identificateur unique. Ils sont envoyés par les serveurs web aux
              navigateurs. Ces cookies peuvent ensuite être renvoyés au serveur
              chaque fois que le navigateur lance une requête au serveur. Les
              cookies peuvent être utilisés par les serveurs web pour identifier
              et suivre les utilisateurs lorsqu’ils naviguent sur les
              différentes pages d’un site web, ou encore pour identifier les
              utilisateurs qui retournent sur un site web. Les cookies peuvent
              être soit des cookies « persistants », soit des cookies « de
              session ». Un cookie persistant est un fichier texte envoyé par un
              serveur web à un navigateur web : il sera stocké par le navigateur
              et demeurera valide jusqu’à la date d’expiration fixée (à moins
              que l’utilisateur ne l’efface avant la date d’expiration). Un
              cookie de session expirera, lui, à la fin de la session, lorsque
              l’utilisateur ferme le navigateur. Si vous avez des questions au
              sujet des cookies de keyservices ou de cette politique de cookies,
              ou afin d’exercer vos droits, conformément à RGPD, veuillez
              contacter keyservices à l’adresse suivante :
              <a href="mailto:rgpd@keyservices.com">rgpd@keyservices.com</a>
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              19. Données à caractère personnel
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices pratique une politique de protection des données
              personnelles dont les caractéristiques sont explicitées dans le
              document intitulé « Charte relative à la protection des données à
              caractère personnel », accessible sur la page d’accueil de la
              Plateforme et dont le Bailleur est expressément invité à prendre
              connaissance.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              20. Assurance
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Chacune des Parties garantit, le cas échéant, l’autre Partie avoir
              souscrit les polices d’assurance nécessaires pour assurer et
              garantir les conséquences de sa responsabilité civile au cas où
              elle serait engagée, de manière à couvrir les conséquences
              pécuniaires des dommages dont elle aurait à répondre.
              <br />
              En outre, le Bailleur garantit expressément à keyservices avoir
              souscrit une assurance « multirisque habitation » sur chacun des
              Biens mis en location par l’intermédiaire de la Plateforme,
              incluant la garantie responsabilité civile familiale et couvrant
              la responsabilité civile des locataires et souslocataires, ainsi
              que le vol, le bris, l’incendie et toutes autres dégradations
              susceptibles d’être commises par un locataire.
              <br />
              Chacune des Parties s’engage à maintenir ces polices d’assurance
              pendant toute la durée d’exécution des présentes.
              <br />
              Chacune des Parties s’engage à produire à la première demande de
              l’autre Partie les attestations d’assurance correspondantes.
              <br />
              Toute modification, suspension ou résiliation des polices
              d’assurance par l’une ou l’autre des Parties devra être portée à
              la connaissance de l’autre Partie, sans délai, par tout moyen
              utile et notamment par email.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              21. Publicité
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices se réserve la faculté d’insérer, sur toute page de la
              Plateforme et dans toute communication aux Bailleurs, tous
              messages publicitaires ou promotionnels sous une forme et dans des
              conditions dont keyservices sera seule juge.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              22. Liens et sites tiers
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices ne pourra en aucun cas être tenue pour responsable de
              la disponibilité technique de sites web exploités par des tiers (y
              compris ses éventuels partenaires) auxquels le Bailleur accéderait
              par l’intermédiaire de la Plateforme.
              <br />
              keyservices n’endosse aucune responsabilité au titre des contenus,
              publicités, produits et/ou services disponibles sur de tels sites
              tiers dont il est rappelé qu’ils sont régis par leurs propres
              conditions d’utilisation.
              <br />
              keyservices n’est pas non plus responsable des transactions
              intervenues entre le Bailleur et un quelconque annonceur,
              professionnel ou commerçant (y compris ses éventuels Sites
              Partenaires) vers lequel le Bailleur serait orienté par
              l’intermédiaire de la Plateforme et ne saurait en aucun cas être
              partie à quelques litiges éventuels que ce soit avec ces tiers
              concernant notamment les garanties, déclarations et autres
              obligations quelconques auxquelles ces tiers sont tenus.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              23. Renonciation
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le fait pour l’une des Parties de ne pas avoir exercé un
              quelconque droit ou pouvoir en application des dispositions des
              présentes Conditions Générales, ou de l’avoir exercé en retard, ne
              pourra être interprété comme une renonciation à exercer tout ou
              partie de ce droit ou pouvoir, et tout exercice unique ou partiel
              de tout droit ou pouvoir ne pourra empêcher une nouvelle mise en
              œuvre de ce droit ou pouvoir.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              24. Force majeure
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices ne pourra être tenue responsable vis-à-vis du Bailleur
              dans l’hypothèse où l’exécution de ses obligations serait
              retardée, restreinte ou rendue impossible du fait de la survenance
              d’un évènement de force majeure. Sont notamment considérées comme
              cas de force majeure, les hypothèses habituellement reconnues par
              la jurisprudence et les tribunaux français.
              <br />
              De convention expresse entre les Parties, constitue un évènement
              de force majeure tout évènement extérieur à keyservices empêchant
              l’exécution des Services, et notamment empêchant keyservices
              d’accéder au Bien (porte bloquée, changement de code, problème de
              clef, etc).
              <br />
              La survenance d’un évènement de force majeure suspendra dans un
              premier temps l’exécution des Services pendant une durée qui ne
              pourra être supérieure à trois (3) mois. Dans l’hypothèse où le
              cas de force majeure se poursuivrait au-delà de la période
              susvisée, les Parties pourront résilier les présentes Conditions
              générales, de plein droit, sans formalité judiciaire, sans préavis
              et sans droit à indemnités de quelque nature que ce soit, par
              l’envoi d’une lettre recommandée avec accusé de réception ayant
              effet immédiat.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              25. Nullité
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Si l’une quelconque des dispositions des présentes Conditions
              Générales venait à être déclarée nulle ou non applicable en raison
              d’une loi, d’un règlement ou à la suite d’une décision définitive
              rendue par une juridiction compétente, seule cette disposition
              serait frappée de nullité, les autres dispositions garderont toute
              leur force et leur portée.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              26. Indépendance entre les Parties
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Les Parties aux présentes Conditions Générales sont juridiquement
              indépendantes l’une de l’autre.
              <br />
              Aucune des stipulations des présentes ne pourra être interprétée
              comme créant entre les Parties une société, une société en
              participation, une joint-venture, une filiale, une relation
              d’agents ou d’employés à employeur, une association.
              <br />
              Chaque Partie demeure responsable de ses actes, allégations,
              engagements, prestations, produits personnels, données.
              <br />
              Aucune ne peut engager la responsabilité de l’autre Partie de
              quelque manière que ce soit du fait de ses actes, allégations,
              engagements, prestations, produits personnels, données.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              27. Modification des Conditions Générales
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              keyservices se réserve la faculté de modifier à tout moment les
              présentes Conditions Générales. keyservices se réserve notamment
              la possibilité de modifier et/ou d’arrêter de proposer tout ou
              partie des Services, à tout moment à sa libre discrétion.
              <br />
              Le Bailleur sera informé de ces modifications par tout moyen
              utile, au moins trente (30) jours avant leur entrée en vigueur.
              Les Conditions Générales modifiées s’appliqueront dès leur mise en
              ligne sur la Plateforme.
              <br />
              Le Bailleur qui n’accepte pas les Conditions Générales modifiées
              doit se désinscrire des Services dans les conditions de l’article
              « Durée ».
              <br />
              Tout Bailleur qui a recours aux Services postérieurement à
              l’entrée en vigueur des Conditions Générales modifiées est réputé
              avoir accepté ces modifications qui lui seront pleinement
              applicables.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              28. Notification
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Sauf disposition contraire, toute notification à l’une ou l’autre
              Partie requise aux termes des présentes Conditions Générales devra
              être faite par la voie électronique et/ou par lettre recommandée
              avec avis de réception, à l’adresse renseignée sur son Compte ou à
              l’adresse indiquée à l’article « Exploitant de la Plateforme »
              pour keyservices.
              <br />
              Chaque Partie reconnaît et accepte que toute notification faite
              par email sera considérée comme valable et libérera l’autre Partie
              de toute obligation.
              <br />
              Le Bailleur s’engage à mettre à jour son adresse dans son Compte.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              29. Médiation
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              En cas de litige relatif aux présentes conditions générales, le
              Bailleur a la faculté de recourir gratuitement à un médiateur de
              la consommation conformément aux articles L.152-1 du Code de la
              consommation.
              <br />
              Une liste des médiateurs agrées est disponible sur le site
              internet de la médiation de la consommation accessible à l’adresse
              suivante : http://www.economie.gouv.fr/mediation-conso.
              <br />
              Le Bailleur a en outre la possibilité de déposer une plainte via
              la plateforme de règlement en ligne des litiges (dites plateforme
              « RLL ») accessible au moyen du lien ci-dessous :
              <br />
              http://www.economie.gouv.fr/mediation-conso
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              30. Convention de preuve
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Le Bailleur reconnaît et accepte expressément :
              <br />
              que les données recueillies sur la Plateforme font foi de la
              réalité des opérations intervenues dans le cadre des présentes
              Conditions Générales ;
              <br />
              que ces données constituent le principal mode de preuve admis
              entre les Parties.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              31. Loi applicable et Tribunaux compétents
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Les présentes Conditions Générales sont régies par la loi
              française.
              <br />
              Tout litige pouvant naître à l’occasion de sa validité, de son
              interprétation ou de son exécution sera soumis à la compétence
              exclusive du Tribunal de Commerce de Paris (France), sauf règle de
              procédure impérative contraire.
            </p>
            <h3 className="subtitle is-size-3 is-size-5-mobile mt-4">
              32. Entrée en vigueur
            </h3>
            <p className="is-size-5 is-size-6-mobile">
              Les présentes Conditions Générales sont entrées en vigueur le 1er
              Janvier 2020.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

Legalite.getInitialProps = async (ctx) => {
  const { cookie } = ctx.req ? ctx.req.headers : {};
  const host =
    process.env.NODE_ENV !== 'development'
      ? process.env.ROOT_URL
      : 'http://localhost:5000';
  const res = await fetch(`${host}/api/auth`, {
    headers: {
      cookie
    }
  });

  if (res.status === 401 && !ctx.req) {
    return { authenticated: false };
  }

  if (res.status === 401 && ctx.req) {
    return { authenticated: false };
  }
  return { authenticated: true };
};

export default Legalite;
