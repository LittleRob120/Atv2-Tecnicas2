import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular?: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public set Nome(n: string) { this.nome = n }

    public get NomeSocial() { return this.nomeSocial }
    public set NomeSocial(n: string) { this.nomeSocial = n }

    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }

    public get Telefones() { return this.telefones }
    public adicionarTelefone(t: Telefone) { this.telefones.push(t) }
    public removerTelefone(indice: number) { this.telefones.splice(indice, 1) }

    public get Endereco() { return this.endereco }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    public get Documentos() { return this.documentos }
    public adicionarDocumento(d: Documento) { this.documentos.push(d) }
    public removerDocumentoPorNumero(numero: string) {
        this.documentos = this.documentos.filter(d => (d as any).Numero === numero ? false : true)
    }

    public get Dependentes() { return this.dependentes }
    public adicionarDependente(dep: Cliente) {
        dep.Titular = this
        this.dependentes.push(dep)
    }
    public removerDependentePorDocumento(numero: string) {
        this.dependentes = this.dependentes.filter(d => !d.Documentos.some(doc => (doc as any).Numero === numero))
    }

    public get Titular() { return this.titular }
    public set Titular(t: Cliente | undefined) { this.titular = t }
}