# Work in progress

## CI/CD setup

We are using ArgoCD to deploy this project. ArgoCD is setup in a way that it is self managed.

The `argocd-bootstrap` folder contains the basics to:
- Setup ArgoCD
- Setup SealedSecrets
- Setup ArgoCD as an ArgoCD application itself (self setup)

![ArgoCD Setup](doc-images/argocd-setup.png)
