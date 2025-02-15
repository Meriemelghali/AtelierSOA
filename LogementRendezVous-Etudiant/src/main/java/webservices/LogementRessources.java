package webservices;

import entities.Logement;
import metiers.LogementBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
@Path("/logement")
public class LogementRessources {
    LogementBusiness help = new LogementBusiness();
    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity(help.getLogements()).
                build();
    }
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/new")
    public Response addLogement(Logement logement){
        return Response
                .ok(201)
                .entity("Logement a été ajouté avec success")
                .build();
    }
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/delete/{reference}")
    public Response deleteLogement(@PathParam("reference") int reference){
        boolean isDeleted = help.deleteLogement(reference);
        if (isDeleted) {
            return Response
                    .ok("Logement supprimé avec succès")
                    .build();
        }
        return Response
                .status(404)
                .entity("Logement non trouvé")
                .build();
    }
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/update/{reference}")
    public Response updateLogement(@PathParam("reference") int reference, Logement logement){
        boolean isUpdated = help.updateLogement(reference, logement);
        if (isUpdated) {
            return Response
                    .ok("Logement mis à jour avec succès")
                    .build();
        }
        return Response
                .status(404)
                .entity("Logement non trouvé")
                .build();
    }
}
