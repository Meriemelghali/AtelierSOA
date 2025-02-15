package webservices;

import entities.RendezVous;
import metiers.LogementBusiness;
import metiers.RendezVousBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/rendvous")
public class RendezVousRessources {
    RendezVousBusiness help = new RendezVousBusiness();
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/list")
    public Response getAll() {
        return Response
                .ok(help.getListeRendezVous())
                .build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Response addRendezVous(RendezVous rendezVous) {
        boolean isAdded = help.addRendezVous(rendezVous);
        if (isAdded) {
            return Response
                    .status(201)
                    .entity(rendezVous)
                    .build();
        } else {
            return Response
                    .status(400)
                    .entity("Erreur: Logement non trouvé pour ce rendez-vous.")
                    .build();
        }
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/update/{id}")
    public Response updateRendezVous(@PathParam("id") int id, RendezVous updatedRendezVous) {
        boolean isUpdated = help.updateRendezVous(id, updatedRendezVous);
        if (isUpdated) {
            return Response
                    .status(200)
                    .entity(updatedRendezVous)
                    .build();
        } else {
            return Response
                    .status(404)
                    .entity("Rendez-vous non trouvé ou erreur dans la mise à jour.")
                    .build();
        }
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/delete/{id}")
    public Response deleteRendezVous(@PathParam("id") int id) {
        boolean isDeleted = help.deleteRendezVous(id);
        if (isDeleted) {
            return Response
                    .status(204)
                    .build();
        } else {
            return Response
                    .status(404)
                    .entity("Rendez-vous non trouvé.")
                    .build();
        }
    }
}
